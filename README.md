# YO!: A Faux Email Service
![Gif showing what the project looks like today](./doc/images/yo-menu-demo.gif)

## Purpose
This is an exercise in uncovering Hotwire patterns by reverse-engineering
[HEY Email](https://hey.com/). The interface is decidedly similar to the actual
product. This is done in admiration, I am not affiliated with Basecamp.

## App Structure
Usually, my framework-of-choice is Ruby on Rails. In this case, I decided to
build this using node and express in the hope of keeping everything
as bare-bones as possible. We'll see how it goes.

This is modeled following MVC and heavily inspired by Rails.

This is not meant to provide a friendly developer environment. Re-building the
app might be necessary in unexpected circumstances.

## Running The App
1. Install dependencies
1. Build with `yarn build`
1. Start server with `yarn start`
1. Navigate to [http://localhost:8080/](http://localhost:8080/)
