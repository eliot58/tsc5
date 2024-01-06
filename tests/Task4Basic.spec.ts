import { Blockchain, SandboxContract } from '@ton-community/sandbox';
import { Cell, beginCell, toNano } from 'ton-core';
import { Task4Basic } from '../wrappers/Task4Basic';
import '@ton-community/test-utils';
import { compile } from '@ton-community/blueprint';

describe('Task4Basic', () => {
    let code: Cell;

    beforeAll(async () => {
        code = await compile('Task4Basic');
    });

    let blockchain: Blockchain;
    let task4Basic: SandboxContract<Task4Basic>;

    beforeEach(async () => {
        blockchain = await Blockchain.create();

        task4Basic = blockchain.openContract(Task4Basic.createFromConfig({}, code));

        const deployer = await blockchain.treasury('deployer');

        const deployResult = await task4Basic.sendDeploy(deployer.getSender(), toNano('0.05'));

        expect(deployResult.transactions).toHaveTransaction({
            from: deployer.address,
            to: task4Basic.address,
            deploy: true,
            success: true,
        });
    });

    it('should work', async () => {
        const res = await blockchain.runGetMethod(task4Basic.address, "solve", [{ type: 'int', value: BigInt(8) }, { type: 'int', value: BigInt(5) }, 
        { type: 'tuple', items: [{ type: 'tuple', items: [{ type: "slice", cell: beginCell().storeUint(83, 8).endCell()}, { type: "slice", cell: beginCell().storeUint(88, 8).endCell()}, { type: "slice", cell: beginCell().storeUint(46, 8).endCell()}, { type: "slice", cell: beginCell().storeUint(63, 8).endCell()}, { type: "slice", cell: beginCell().storeUint(88, 8).endCell()}]},{ type: 'tuple', items: [{ type: "slice", cell: beginCell().storeUint(46, 8).endCell()}, { type: "slice", cell: beginCell().storeUint(88, 8).endCell()}, { type: "slice", cell: beginCell().storeUint(88, 8).endCell()}, { type: "slice", cell: beginCell().storeUint(46, 8).endCell()}, { type: "slice", cell: beginCell().storeUint(88, 8).endCell()}]},{ type: 'tuple', items: [{ type: "slice", cell: beginCell().storeUint(88, 8).endCell()}, { type: "slice", cell: beginCell().storeUint(46, 8).endCell()}, { type: "slice", cell: beginCell().storeUint(63, 8).endCell()}, { type: "slice", cell: beginCell().storeUint(46, 8).endCell()}, { type: "slice", cell: beginCell().storeUint(46, 8).endCell()}]},{ type: 'tuple', items: [{ type: "slice", cell: beginCell().storeUint(46, 8).endCell()}, { type: "slice", cell: beginCell().storeUint(63, 8).endCell()}, { type: "slice", cell: beginCell().storeUint(63, 8).endCell()}, { type: "slice", cell: beginCell().storeUint(46, 8).endCell()}, { type: "slice", cell: beginCell().storeUint(46, 8).endCell()}]},{ type: 'tuple', items: [{ type: "slice", cell: beginCell().storeUint(88, 8).endCell()}, { type: "slice", cell: beginCell().storeUint(63, 8).endCell()}, { type: "slice", cell: beginCell().storeUint(46, 8).endCell()}, { type: "slice", cell: beginCell().storeUint(46, 8).endCell()}, { type: "slice", cell: beginCell().storeUint(46, 8).endCell()}]},{ type: 'tuple', items: [{ type: "slice", cell: beginCell().storeUint(46, 8).endCell()}, { type: "slice", cell: beginCell().storeUint(46, 8).endCell()}, { type: "slice", cell: beginCell().storeUint(88, 8).endCell()}, { type: "slice", cell: beginCell().storeUint(46, 8).endCell()}, { type: "slice", cell: beginCell().storeUint(88, 8).endCell()}]},{ type: 'tuple', items: [{ type: "slice", cell: beginCell().storeUint(46, 8).endCell()}, { type: "slice", cell: beginCell().storeUint(46, 8).endCell()}, { type: "slice", cell: beginCell().storeUint(63, 8).endCell()}, { type: "slice", cell: beginCell().storeUint(46, 8).endCell()}, { type: "slice", cell: beginCell().storeUint(46, 8).endCell()}]},{ type: 'tuple', items: [{ type: "slice", cell: beginCell().storeUint(88, 8).endCell()}, { type: "slice", cell: beginCell().storeUint(46, 8).endCell()}, { type: "slice", cell: beginCell().storeUint(46, 8).endCell()}, { type: "slice", cell: beginCell().storeUint(46, 8).endCell()}, { type: "slice", cell: beginCell().storeUint(69, 8).endCell()}]}]}], {gasLimit: 1000_000_000n});

        console.log(await res.stack);
    });
});
