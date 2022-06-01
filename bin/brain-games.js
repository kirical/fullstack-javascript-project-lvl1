#!/usr/bin/env node
import { askName } from "../src/cli.js"

export const welcomeMessage = () => {

  console.log("Welcome to the Brain Games!");
  askName();

};


welcomeMessage();


