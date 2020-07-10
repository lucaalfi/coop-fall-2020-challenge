class EventSourcer {
  constructor() {
    this.value = 0;
    this. cur=-1;
    this.actions=[];
  }


  add(num) {
  	let temp = this.value;
  	temp+=num;
  	this.actions.push(num);
  	this.value=temp;
  	this.cur++;
  }

  subtract(num) {
  	let temp= this.value;
  	temp-=num;
  	this.actions.push(num*-1);
  	this.value=temp;
  	this.cur++;
  }

  undo() {
  	if(this.cur>0){
  		this.value -= this.actions[this.cur];
  		this.cur--;
  	}
  	else{
  		this.cur=-1;
  		this.value=0;
  	}
  }

  redo() {
  	if(this.actions.length-1>this.cur){
  		this.cur++;
  		this.value += this.actions[this.cur];
  	}
  }

  bulk_undo(num) {
  	let i;
  	for(i=0;i<num;i++){
  		this.undo();
  	}
  }

  bulk_redo(num) {
  	let i;
  	for(i=0;i<num;i++){
  		this.redo();
  	}
  }

}

// ----- Do not modify anything below this line (needed for test suite) ------
module.exports = EventSourcer;
