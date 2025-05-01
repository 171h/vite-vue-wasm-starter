<p align="center">
  <img alt="vite" src="./public/vite.svg" width="8%">
  <img alt="vue" src="./public/vue.svg" width="8%">
  <img alt="typescript" src="./public/typescript.svg" width="8%">
  <img alt="rust" src="./public/rust-wasm.png" width="13%">
</p>

<h1 align="center">Vite + Vue + Typescript+ Webassembly</h1>
<p align="center"> A starter project for you to create a blazingly fast web application </p>

## Before getting started

You need to get these prerequisites installed:

* [Rust](https://www.rust-lang.org/learn/get-started)
* [NodeJS](https://nodejs.org)
* [wasm-pack](https://github.com/rustwasm/wasm-pack)
* [rsw-rs](https://github.com/lencx/rsw-rs)

## Installation

### 1. Clone the repository

```sh
git clone https://github.com/171h/vite-vue-wasm-starter
cd vite-vue-wasm-starter
```

### 2. Install dependencies

```sh
pnpm install # OR npm install
```

### 3. Run the application

You should open two tabs of terminal. **The order of execution is important and do not close the first window ⚠️**.

In the first tab, run:

```sh
pnpm rsw watch
```

In the second tab, run:

```sh
pnpm dev
```

## Deploying

Run:

```sh
pnpm run build
```

## Adding a crate

1. Generate rust crate

```sh
pnpm rsw new hello-world
```

This will create a crate in a folder named `hello-world`

2. Edit `rsw.toml` to register the crate

```sh
[[crates]]
name = "hello-world"
```

## Reference

Improvement base on <https://github.com/zuramai/vite-wasm-starter>
