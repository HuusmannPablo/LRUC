class LRUCache {
    constructor(capacity){
        // Initialize the hash map and the Doublelinkedlist, save capacity, 
        // since hashmap and linked list don't keep track of their size, I need do define that variable here
        this.map = {};
        this.list = new DoublyLinkedList();
        this.capacity = capacity;
        this.size = 0;
    }

    get(key){
        // If the key doesn't exists, return -1
        if(!this.map[key]) {
            return -1;
        }
        // if the key exists, move to front of linked list and return the value
        const node = this.map[key];
        this.list.move2front(node);
        return node.value;
    }

    put(key, value){
        // The key exists
        //  => update the value and move the node to the fron of the linkedList
        if(this.map[key]){
            const node = this.map[key];
            node.value = value;
            this.list.move2front(node);
            return;
        }

        // The key doesn't exist
        //  at capacity ? => remove last node of hashmap and linked list, and decrement size.
        // not at capacity ? => add to the linked list, save to hashmap 
        if(this.capacity===this.size){
    
        } 
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = new ListNode();
        this.tail = new ListNode();
        this.connect(this.head, this.tail)
    }

    connect(node1, node2){
        // Function to connect the nodes with eachother
        node1.next = node2;
        node2.prev = node1;
    }

    add(node){
        // head   -   3
        //    \  |  /
        //      4
        // to add a node at the front I need to connect it with the head and next node
        this.connect(node, this.head.next);
        this.connect(this.head, node);
    }

    delete(node){
        // by disconnecting the node from the previous and next, I delete the node
        this.connect(node.prev, node.next);
    }

    move2front(node){
        // delete the node, and add it to the front
        this.delete(node);
        this.add(node);    
    }

    move2back(node){
        // send the node to the last place

    }

    removeLast(){
        // select the last node, delete it and return it
    }

}

class ListNode{
    constructor(key, value){
        this.key = key;
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

let cache = new LRUCache(2); 
cache.put(1, 1); 
cache.put(2, 2); 

let get1 = cache.get(1); 
console.log(get1); 

cache.put(3, 3); 

let get2 = cache.get(2);
console.log(get2); 

cache.put(4, 4);

let get3 = cache.get(1);
console.log(get3);

let get4 = cache.get(3);
console.log(get4);

let get5 = cache.get(4);
console.log(get5);

// cache.delete(3);

let get6 = cache.get(3);
console.log(get6);

// cache.delete(1)