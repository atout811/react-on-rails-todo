import ReactOnRails from "react-on-rails";

import TodoList from "../bundles/TodoList/components/TodoListServer";

// This is how react_on_rails can see the TodoList in the browser.
ReactOnRails.register({
  TodoList,
});
