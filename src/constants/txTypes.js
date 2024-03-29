export const txTypes = {
  transfers: {
    send: 'Send'
  },
  declarations: {
    create_validator: 'Create Validator',
    edit_validator: 'Edit Validator',
    unjail: 'Unjail'
  },
  stakings: {
    delegate: 'Delegate',
    begin_redelegate: 'Redelegate',
    begin_unbonding: 'Unbond',
    set_withdraw_address: 'Set Withdraw Address',
    withdraw_delegator_reward: 'Withdraw Delegation Reward'
  },
  governance: {
    submit_proposal: 'Submit Proposal',
    deposit: 'Deposit',
    vote: 'Vote'
  },
  exchanges: {
    make: 'Make Order',
    take: 'Take Order',
    'cancel-exchange': 'Cancel Order'
  },
  issuances: {
    issue: 'Issue',
    issue_mint: 'Mint',
    issue_burn_owner: 'Burn',
    issue_burn_from: 'Burn From',
    issue_burn_holder: 'Holder Burn',
    issue_freeze: 'Freeze',
    issue_unfreeze: 'Unfreeze',
    issue_description: 'Description',
    issue_transfer_ownership: 'Transfer Ownership',
    issue_disable_feature: 'Disable Feature'
  },
  tokenBoxs: {
    create: 'Create Box',
    withdraw: 'Withdraw',
    inject: 'Inject',
    'cancel-deposit': 'Cancel Deposit',
    'cancel-future': 'Cancel Future',
    describe: 'Description',
    disable_feature: 'Disable Feature'
  }
};
