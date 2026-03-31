// Factory supervision application code

class FactorySupervision {
    constructor() {
        this.machines = [];
    }

    addMachine(machine) {
        this.machines.push(machine);
    }

    monitorMachines() {
        // Monitor the status of machines
        this.machines.forEach(machine => {
            console.log(`Machine ${machine.name} is ${machine.status}`);
        });
    }
}

// Example usage
const factory = new FactorySupervision();
factory.addMachine({ name: 'Machine 1', status: 'Running' });
factory.addMachine({ name: 'Machine 2', status: 'Stopped' });
factory.monitorMachines();
