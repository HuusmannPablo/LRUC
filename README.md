# LRUC
Least Recently Used Cache.

This repo was created to design and implement a data structure for Least Recently Used (LRU) cache.
<<<<<<< HEAD
It should suppert Get, Put and Delete operations, and I can't spend more than two hours working on it.

Solution to the problem found in:
https://leetcode.com/problems/lru-cache/description/

Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

Implement the LRUCache class:

LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
int get(int key) Return the value of the key if the key exists, otherwise return -1.
void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.
The functions get and put must each run in O(1) average time complexity.
=======

It should support Get, Put and Delete operations.

It was build using JavaScript and the combination of two data structures: a doubly linked list and a hash map.


I set up our linked list with the most-recently used item at the head of the list and the least-recently used item at the tail.
This lets us access the LRU element in O(1) time by looking at the tail of the list.

Finding an item in a linked list is normally O(n) time, since we need to walk the whole list. But the whole point of a cache is to get quick lookups. 
I add in a hash map that maps items to linked list nodes.

Doubly-linked list with a dictionary where each item contains links to both its predecessor and its successor.
That lets us find an element in our cache's linked list in O(1) time, instead of O(n).
>>>>>>> 9ef170aecf697b542c2d099f241a5eae35698408
