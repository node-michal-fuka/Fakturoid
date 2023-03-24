import Fakturoid from '../index';
import { Account, BankAccount, User } from '../Types';

// Please set your account to test basic http operations.
const SLUG = '';
const EMAIL = '';
const TOKEN = '';

if (TOKEN){
    test('Retrieve /account.json', async () => {
        const client = new Fakturoid(SLUG, EMAIL, TOKEN);
        const account: Account = await client.getAccount();

        expect(account).toBeDefined();
        expect(account.subdomain).toBe(client.getSlug()); // Provided slug should be same as retrieved lsug.
    });

    test('Retrieve /bank_accounts.json', async () => {
        const client = new Fakturoid(SLUG, EMAIL, TOKEN);
        const bankAccounts: BankAccount[] = await client.getBankAccounts();
        expect(bankAccounts).toBeDefined();
    });

    test('Retrieve /users.json', async () => {
        const client = new Fakturoid(SLUG, EMAIL, TOKEN);
        const users: User[] = await client.getUsers();
        expect(users).toBeDefined();
    });
}else {
    test('No tests here. Define account to run test against your account.', async () => {
    });
}