import { Action, Dispatch, MiddlewareAPI } from "@reduxjs/toolkit";
import { messageReceived } from "./numberSlice";

const websocketMiddleware = (storeAPI: MiddlewareAPI) => {
  let ws: WebSocket | null = null;

  return (next: Dispatch) => (action: Action) => {
    switch (action.type) {
      case "websocket/CONNECT":
        ws = new WebSocket("ws://localhost:8080/");
        ws.onopen = () => {
          console.log("WebSocket opened");
        };
        ws.onmessage = (event) => {
          const message = JSON.parse(event.data);
          storeAPI.dispatch(messageReceived(message));
        };
        ws.onclose = () => {
          console.log("WebSocket closed");
        };
        break;
      case "websocket/DISCONNECT":
        if (ws) {
          ws.close();
        }
        ws = null;
        console.log("WebSocket closed from app");
        break;
      default:
        return next(action);
    }
  };
};

export default websocketMiddleware;
