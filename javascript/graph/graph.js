"use strict";

class Vertex {
  constructor(value) {
    this.value = value;
  }
}

class Edge {
  constructor(vertex, weight) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    this._adjacencyList = new Map();
  }
  addVertex(vertex) {
    this._adjacencyList.set(vertex, []);
  }
  addDirectedEdge(startVertex, endVertex, weight = 0) {
    if (
      !this._adjacencyList.has(startVertex) ||
      !this._adjacencyList.has(endVertex)
    ) {
      throw new Error("INVALID NODE");
    }
    const adjacencies = this._adjacencyList.get(startVertex);
    adjacencies.push(new Edge(endVertex, weight));
  }
  getNeighbors(vertex) {
    if (!this._adjacencyList.has(vertex)) {
      throw new Error("__ERROR__ Invalid Vertex", vertex);
    }
    return this._adjacencyList.get(vertex);
  }
  printAll() {
    for (const [vertex, edge] of this._adjacencyList.entries()) {
      console.log(vertex);
      console.log(edge);
    }
  }
  GetNodes() {
    return this._adjacencyList.entries();
  }
  Size() {
    return this._adjacencyList.size;
  }
}

const graph = new Graph();

const two = new Vertex(2);
const three = new Vertex(3);
const six = new Vertex(6);
const seven = new Vertex(7);
const eight = new Vertex(8);

graph.addVertex(two);
graph.addVertex(three);
graph.addVertex(six);
graph.addVertex(seven);
graph.addVertex(eight);

graph.addVertex(two, six);
graph.addVertex(two, three);
graph.addVertex(three, seven);
graph.addVertex(eight, two);
graph.addVertex(three, six);

// console.log(graph.GetNeighbors(two));

module.exports = Graph;
