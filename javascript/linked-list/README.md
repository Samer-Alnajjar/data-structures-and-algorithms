**Code_Challenge 05 // Linked-List**


[linked-list Code](./linked-list.js)

![linked-list WhiteBoard](../../assets/LinkedList.png)
----------------------

# Singly Linked List
<!-- Short summary or background information -->
Linked list is a type of data structure that is better than arrays.


## Challenge
<!-- Description of the challenge -->
We want the user to have the ability to create a linked list and able to search inside it and print all the values inside it also able to add to it.

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->

I wrote the functions then the tests. I don't know how to do the opposite yet.

The big O:
- space: O(1)
- time: O(n)

## API
<!-- Description of each method publicly available to your Linked List -->

- Insert() => function add nodes into the linked list.
- includes(value) => function check if the passed value is in the linked list.
- toString() => function will print all the values inside the linked list.
- append(value) => function will add a node to the end of the linked list.
- insertAfter(value, newVal) => function will search for the value and add a new node with the newVal after the matched value.
- insertBefore(value, newVal) => function will search for the value and add a new node with the newVal before the matched value.
- kthFromEnd(k) => it will return the value of the node that matches the index but in reverse, starts from the last of linked list