import test from "./test_file";
import amazonStoreButton from "./amazon_store_button";
import googleStoreButton from "../store_buttons/google_store_button"
import windowStoreButton from './windows_store_button'

const storeButtonCollections = [
  {componentName: "test store button", component: test},
  {componentName: "Amazon Store Button", component: amazonStoreButton},
  {componentName: "Google Store Button", component: googleStoreButton},
  {componentName: "Windows Store Button", component: windowStoreButton},
];

export default storeButtonCollections;
