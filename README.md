# LRUC
Least Recently Used Cache.

This repo was created to design and implement a data structure for Least Recently Used (LRU) cache.

It should support Get, Put and Delete operations.

It was build using JavaScript and the combination of two data structures: a doubly linked list and a hash map.


I set up our linked list with the most-recently used item at the head of the list and the least-recently used item at the tail.
This lets us access the LRU element in O(1) time by looking at the tail of the list.

Finding an item in a linked list is normally O(n) time, since we need to walk the whole list. But the whole point of a cache is to get quick lookups. 
I add in a hash map that maps items to linked list nodes.

Doubly-linked list with a dictionary where each item contains links to both its predecessor and its successor.
That lets us find an element in our cache's linked list in O(1) time, instead of O(n).
