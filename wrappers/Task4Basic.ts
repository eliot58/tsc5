import { Address, beginCell, Cell, Contract, contractAddress, ContractProvider, Sender, SendMode } from 'ton-core';

export type Task4BasicConfig = {};

export function task4BasicConfigToCell(config: Task4BasicConfig): Cell {
    return beginCell().endCell();
}

export class Task4Basic implements Contract {
    constructor(readonly address: Address, readonly init?: { code: Cell; data: Cell }) {}

    static createFromAddress(address: Address) {
        return new Task4Basic(address);
    }

    static createFromConfig(config: Task4BasicConfig, code: Cell, workchain = 0) {
        const data = task4BasicConfigToCell(config);
        const init = { code, data };
        return new Task4Basic(contractAddress(workchain, init), init);
    }

    async sendDeploy(provider: ContractProvider, via: Sender, value: bigint) {
        await provider.internal(via, {
            value,
            sendMode: SendMode.PAY_GAS_SEPARATELY,
            body: beginCell().endCell(),
        });
    }

    async getSolve(provider: ContractProvider){
        const result = await provider.get("solve", [{ type: 'int', value: BigInt(8) }, 
        { type: 'int', value: BigInt(5) }, 
        { type: 'tuple', items: [

        { type: 'tuple', items: [{ type: "slice", cell: beginCell().storeUint(83, 8).endCell()}, { type: "slice", cell: beginCell().storeUint(88, 8).endCell()}, { type: "slice", cell: beginCell().storeUint(46, 8).endCell()}, { type: "slice", cell: beginCell().storeUint(63, 8).endCell()}, { type: "slice", cell: beginCell().storeUint(88, 8).endCell()}]},

        { type: 'tuple', items: [{ type: "slice", cell: beginCell().storeUint(46, 8).endCell()}, { type: "slice", cell: beginCell().storeUint(88, 8).endCell()}, { type: "slice", cell: beginCell().storeUint(88, 8).endCell()}, { type: "slice", cell: beginCell().storeUint(46, 8).endCell()}, { type: "slice", cell: beginCell().storeUint(88, 8).endCell()}]},

        { type: 'tuple', items: [{ type: "slice", cell: beginCell().storeUint(88, 8).endCell()}, { type: "slice", cell: beginCell().storeUint(46, 8).endCell()}, { type: "slice", cell: beginCell().storeUint(63, 8).endCell()}, { type: "slice", cell: beginCell().storeUint(46, 8).endCell()}, { type: "slice", cell: beginCell().storeUint(46, 8).endCell()}]},

        { type: 'tuple', items: [{ type: "slice", cell: beginCell().storeUint(46, 8).endCell()}, { type: "slice", cell: beginCell().storeUint(63, 8).endCell()}, { type: "slice", cell: beginCell().storeUint(63, 8).endCell()}, { type: "slice", cell: beginCell().storeUint(46, 8).endCell()}, { type: "slice", cell: beginCell().storeUint(46, 8).endCell()}]},

        { type: 'tuple', items: [{ type: "slice", cell: beginCell().storeUint(88, 8).endCell()}, { type: "slice", cell: beginCell().storeUint(63, 8).endCell()}, { type: "slice", cell: beginCell().storeUint(46, 8).endCell()}, { type: "slice", cell: beginCell().storeUint(46, 8).endCell()}, { type: "slice", cell: beginCell().storeUint(46, 8).endCell()}]},

        { type: 'tuple', items: [{ type: "slice", cell: beginCell().storeUint(46, 8).endCell()}, { type: "slice", cell: beginCell().storeUint(46, 8).endCell()}, { type: "slice", cell: beginCell().storeUint(88, 8).endCell()}, { type: "slice", cell: beginCell().storeUint(46, 8).endCell()}, { type: "slice", cell: beginCell().storeUint(88, 8).endCell()}]},

        { type: 'tuple', items: [{ type: "slice", cell: beginCell().storeUint(46, 8).endCell()}, { type: "slice", cell: beginCell().storeUint(46, 8).endCell()}, { type: "slice", cell: beginCell().storeUint(63, 8).endCell()}, { type: "slice", cell: beginCell().storeUint(46, 8).endCell()}, { type: "slice", cell: beginCell().storeUint(46, 8).endCell()}]},

        { type: 'tuple', items: [{ type: "slice", cell: beginCell().storeUint(88, 8).endCell()}, { type: "slice", cell: beginCell().storeUint(46, 8).endCell()}, { type: "slice", cell: beginCell().storeUint(46, 8).endCell()}, { type: "slice", cell: beginCell().storeUint(46, 8).endCell()}, { type: "slice", cell: beginCell().storeUint(69, 8).endCell()}]}
    ]}])
        return result.stack;
    }
}
