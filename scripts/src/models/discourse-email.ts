export interface UserEmail {
    email: string
    secondary_emails: any[]
    unconfirmed_emails: any[]
    associated_accounts: AssociatedAccount[]
  }
  
  export interface AssociatedAccount {
    name: string
    description: string
  }