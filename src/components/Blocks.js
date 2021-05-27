/** @format */

import { Component } from "react";
import { Link } from "react-router-dom";
import Block from "./Block";
import { Button } from "react-bootstrap";

class Blocks extends Component {
  state = { blocks: [], paginatedId: 1, blocksLength: 0 };

  componentDidMount() {
    fetch(`${process.env.REACT_APP_BLOCKCHAIN_URL}/api/blocks/length`)
      .then((res) => res.json())
      .then((json) => this.setState({ blocksLength: json }));

    fetch(`${process.env.REACT_APP_BLOCKCHAIN_URL}/api/blocks`)
      .then((res) => res.json())
      .then((json) => this.setState({ blocks: json }));

    this.fetchPaginatedBlocks(this.state.paginatedId)();
  }

  fetchPaginatedBlocks = (paginatedId) => () => {
    fetch(`${process.env.REACT_APP_BLOCKCHAIN_URL}/api/blocks/${paginatedId}`)
      .then((res) => res.json())
      .then((json) => this.setState({ blocks: json }));
  };

  render() {
    // console.log("this.state", this.state);
    return (
      <div>
        <div>
          <Link to='/'>Home</Link>
        </div>
        <br />
        <h3>Blocks</h3>
        <div>
          {[...Array(Math.ceil(this.state.blocksLength / 5)).keys()].map(
            (key) => {
              const paginatedId = key + 1;

              return (
                <span
                  key={key}
                  onClick={this.fetchPaginatedBlocks(paginatedId)}
                >
                  <Button size='small' variant='warning'>
                    {paginatedId}
                  </Button>{" "}
                </span>
              );
            }
          )}
        </div>
        {this.state.blocks.map((block) => {
          return <Block key={block.hash} block={block} />;
        })}
      </div>
    );
  }
}

export default Blocks;
