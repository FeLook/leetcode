var hasCycle = function(head) {
  // let arr = [];
  // while(head){
  //  if(arr.includes(head)){
  //      return true
  //  }else{
  //      arr.push(head);
  //      head = head.next
  //  }
  // }
  // return false
  // let slow = fast = head;
  // while(slow && fast && fast.next){
  //     slow = slow.next;
  //     fast = fast.next.next
  //     if(slow === fast){
  //         return true
  //     }
  // }
  // return false
  let arr = new Set([]);
  while (head) {
    if (arr.has(head)) {
      return true;
    } else {
      arr.add(head);
      head = head.next;
    }
  }
  return false;
};
