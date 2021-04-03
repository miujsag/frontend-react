import { Component } from "react";

export const MenuContext = React.createContext();

export class MenuProvider extends Component {
  state = {
    isSearch: false,
    isSidebar: true,
    isMobileSideBar: false,
  };

  toggleSearch = () => {
    this.setState({
      isSearch: !this.state.isSearch,
    });
  };

  toggleSideBar = () => {
    this.setState({ isSidebar: !this.state.isSidebar });
  };

  toggleMobileSideBar = () => {
    this.setState({
      isMobileSideBar: !this.state.isMobileSideBar,
    });
  };

  render() {
    return (
      <MenuContext.Provider
        value={{
          state: this.state,
          toggleSearch: this.toggleSearch,
          toggleSideBar: this.toggleSideBar,
          toggleMobileSideBar: this.toggleMobileSideBar,
        }}
      >
        {this.props.children}
      </MenuContext.Provider>
    );
  }
}
