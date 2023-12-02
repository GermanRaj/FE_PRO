class Elevator {
    constructor(currentFloor) {
      this.currentFloor = currentFloor;
    }
  
    moveTo(floor) {
      console.log(`Elevator moving from floor ${this.currentFloor} to floor ${floor}`);
      this.currentFloor = floor;
    }
  }
  
  class ElevatorSystem {
    constructor(numFloors, numElevators) {
      this.numFloors = numFloors;
      this.elevators = Array.from({ length: numElevators }, (_, index) => new Elevator(index * 3)); // Инициализация лифтов
    }
  
    callElevator(floor) {
      const closestElevator = this.findClosestElevator(floor);
      closestElevator.moveTo(floor);
    }
  
    findClosestElevator(floor) {
      let minDistance = Infinity;
      let closestElevator = null;
  
      for (const elevator of this.elevators) {
        const distance = Math.abs(elevator.currentFloor - floor);
        if (distance < minDistance) {
          minDistance = distance;
          closestElevator = elevator;
        }
      }
  
      return closestElevator;
    }
  }
