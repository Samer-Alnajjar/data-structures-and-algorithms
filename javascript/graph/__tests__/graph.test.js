"use strict";
let Graph = require("../graph");

describe("Graph Implementation", () => {
  it("Add a Node to the graph", () => {
    let graph = new Graph();
    graph.addVertex(1);
    expect(graph.Size()).toBe(1);
  });
  it("Add an edge to the graph", () => {
    let graph = new Graph();
    graph.addVertex(5);
    graph.addVertex(7);
    graph.addDirectedEdge(5, 7, 1);
    expect(graph.getNeighbors(5)[0].weight).toBe(1);
  });
  it("Retrieved A collection of all nodes from thr graph", () => {
    let graph = new Graph();
    graph.addVertex(5);
    graph.addVertex(7);
    expect(graph.GetNodes()).toBeDefined();
  });
it("Retrieved All appropriate neighbors from thr graph", () => {
    let graph = new Graph();
    graph.addVertex(5);
    graph.addVertex(7);
    graph.addDirectedEdge(5, 7, 1);
    expect(graph.getNeighbors(5)[0].vertex).toBe(7);
  });
it("Return weight between two neighbors nodes", () => {
    let graph = new Graph();
    graph.addVertex(3);
    graph.addVertex(5);
    graph.addDirectedEdge(3, 5, 8);
    expect(graph.getNeighbors(3)[0].weight).toBe(8);
  });
  it("Return the proper size of the graph, representing the number of nodes in the graph", () => {
    let graph = new Graph();
    graph.addVertex(9);
    graph.addVertex(7);
    graph.addDirectedEdge(9, 7);
    expect(graph.Size()).toEqual(2);
  });
it("Return the graph with one node and one edge", () => {
    let graph = new Graph();
    graph.addVertex(9);
    graph.addDirectedEdge(9,9,2);
    expect(graph.Size()).toEqual(1);
  });
  it("Return null when the graph is empty graph", () => {
    let graph = new Graph();
    expect(graph.Size()).toBe(0);
  });
});
