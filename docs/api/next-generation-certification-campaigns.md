# Next Generation Certification Campaigns

This API is flagged as Experimental while we are in the process of migrating from the Legacy Certifications Engine to the Next Generation Certifications Engine. This endpoint resolves only campaigns generated on the Next Generation Certifications Engine. While we do not anticipate major changes, this API will remain in this state until we have completed the full migration of the Legacy Platform to the Next Generation Certifications Engine.

### Certification Campaign Filters

Use this API to implement the certification campaign filter functionality. These filters can be used to create a certification campaign that includes a subset of your entitlements or users to certify.

For example, if for a certification campaign an organization wants to certify only specific users or entitlements, then those can be included/excluded on the basis of campaign filters.

For more information about creating a campaign filter, refer to [Creating a Campaign Filter](https://documentation.sailpoint.com/saas/help/certs/campaign_filters.html#creating-a-campaign-filter)

You can create campaign filters using any of the following criteria types:

- Access Profile : This criteria type includes or excludes access profiles from a campaign.

- Account Attribute : This criteria type includes or excludes certification items that match a specified value in an account attribute.

- Entitlement : This criteria type includes or excludes entitlements from a campaign.

- Identity : This criteria type includes or excludes specific identities from your campaign.

- Identity Attribute : This criteria type includes or excludes identities based on whether they have an identity attribute that matches criteria you've chosen.

- Role : This criteria type includes or excludes roles, as opposed to identities.

- Source : This criteria type includes or excludes entitlements from a source you select.

For more information about these criteria types, refer to [Types of Campaign Filters](https://documentation.sailpoint.com/saas/help/certs/campaign_filters.html#types-of-campaign-filters)

Once the campaign filter is created, it can be linked while creating the campaign. The generated campaign will have the items to review as per the campaign filter.

For example, an inclusion campaign filter is created with a source of Source 1, an operation of Equals, and an entitlement of Entitlement 1. When this filter is selected, only users who have Entitlement 1 are included in the campaign, and only Entitlement 1 is shown in the certification.

### Certification Campaigns

Use this API to implement certification campaign functionality.
With this functionality in place, administrators can create, customize, and manage certification campaigns for their organizations' use. 
Certification campaigns provide SailPoint Identity Security users with an interactive review process they can use to identify and verify access to systems. 
Campaigns help organizations reduce risk of inappropriate access and satisfy audit requirements. 

A certification refers to SailPoint Identity Security's mechanism for reviewing a user's access to entitlements (sets of permissions) and approving or removing that access. 
These certifications serve as a way of showing that a user's access has been reviewed and approved. 
Multiple certifications by different reviewers are often required to approve a user's access. 
A set of multiple certifications is called a certification campaign. 

For example, an organization may use a Manager Certification campaign as a way of showing that a user's access has been reviewed and approved by multiple managers. 
Once this campaign has been completed, SailPoint Identity Security would provision all the access the user needs, nothing more. 

SailPoint Identity Security provides two simple campaign types users can create without using search queries, Manager and Source Owner campaigns:

You can create these types of campaigns without using any search queries in SailPoint Identity Security: 

- ManagerCampaign: SailPoint Identity Security provides this campaign type as a way to ensure that an identity's access is certified by their managers. 
You only need to provide a name and description to create one. 

- Source Owner Campaign: SailPoint Identity Security provides this campaign type as a way to ensure that an identity's access to a source is certified by its source owners. 
You only need to provide a name and description to create one. 
You can specify the sources whose owners you want involved or just run it across all sources. 

For more information about these campaign types, refer to [Starting a Manager or Source Owner Campaign](https://documentation.sailpoint.com/saas/help/certs/starting_campaign.html).

One useful way to create certification campaigns in SailPoint Identity Security is to use a specific search and then run a campaign on the results returned by that search. 
This allows you to be much more specific about whom you are certifying in your campaigns and what access you are certifying in your campaigns. 
For example, you can search for all identities who are managed by "Amanda.Ross" and also have the access to the "Accounting" role and then run a certification campaign based on that search to ensure that the returned identities are appropriately certified. 

You can use SailPoint Identity Security search queries to create these types of campaigns: 

- Identities: Use this campaign type to review and revoke access items for specific identities. 
You can either build a search query and create a campaign certifying all identities returned by that query, or you can search for individual identities and add those identities to the certification campaign. 

- Access Items: Use this campaign type to review and revoke a set of roles, access profiles, or entitlements from the identities that have them. 
You can either build a search query and create a campaign certifying all access items returned by that query, or you can search for individual access items and add those items to the certification campaign. 

- Uncorrelated Accounts: Use this campaign type to certify source accounts that aren't linked to an authoritative identity in SailPoint Identity Security. 
You can use this campaign type to view all the uncorrelated accounts for a source and certify them. 

For more information about search-based campaigns, refer to [Starting a Campaign from Search](https://documentation.sailpoint.com/saas/help/certs/starting_search_campaign.html).

Once you have generated your campaign, it becomes available for preview. 
An administrator can review the campaign and make changes, or if it's ready and accurate, activate it. 

Once the campaign is active, organization administrators or certification administrators can designate other SailPoint Identity Security users as certification reviewers. 
Those reviewers can view any of the certifications they either need to review (active) or have already reviewed (completed).

When a certification campaign is in progress, certification reviewers see the listed active certifications whose involved identities they can review. 
Reviewers can then make decisions to grant or revoke access, as well as reassign the certification to another reviewer. If the reviewer chooses this option, they must provide a reason for reassignment in the form of a comment.

Once a reviewer has made decisions on all the certification's involved access items, he or she must "Sign Off" to complete the review process.
Doing so converts the certification into read-only status, preventing any further changes to the review decisions and deleting the work item (task) from the reviewer's list of work items. 

Once all the reviewers have signed off, the certification campaign either completes or, if any reviewers decided to revoke access for any of the involved identities, it moves into a remediation phase. 
In the remediation phase, identities' entitlements are altered to remove any entitlements marked for revocation.
In this situation, the certification campaign completes once all the remediation requests are completed. 

The end of a certification campaign is determined by its deadline, its completion status, or by an administrator's decision. 

For more information about certifications and certification campaigns, refer to [Certifications](https://documentation.sailpoint.com/saas/user-help/certs/reviewing/index.html).

### Certification Summaries

Use this API to implement certification summary functionality. 
With this functionality in place, administrators and designated certification reviewers can review summaries of identity certification campaigns and draw conclusions about the campaigns' scope, security, and effectiveness. 
Implementing certification summary functionality improves organizations' ability to review their [certifications](https://documentation.sailpoint.com/saas/user-help/certs/reviewing/index.html) and helps them satisfy audit and regulatory requirements by enabling them to trace access changes and the decisions made in their review processes. 

A certification refers to SailPoint Identity Security's mechanism for reviewing a user's access to entitlements (sets of permissions) and approving or removing that access. 
These certifications serve as a way of showing that a user's access has been reviewed and approved. 
Multiple certifications by different reviewers are often required to approve a user's access. 
A set of multiple certifications is called a certification campaign. 

For example, an organization may use a Manager Certification as a way of showing that a user's access has been reviewed and approved by their manager, or if the certification is part of a campaign, that the user's access has been reviewed and approved by multiple managers. 
Once this certification has been completed, SailPoint Identity Security  would provision all the access the user needs, nothing more. 

Certification summaries provide information about identity certification campaigns such as the identities involved, the number of decisions made, and the access changed. 
For example, an administrator or designated certification reviewer can examine the Manager Certification campaign to get an overview of how many entitlement decisions are made in that campaign as opposed to role decisions, which identities would be affected by changes to the campaign, and how those identities' access would be affected.

### Certifications

Use this API to implement certification functionality. 
With this functionality in place, administrators and designated certification reviewers can review users' access certifications and decide whether to approve access, revoke it, or reassign the review to another reviewer. 
Implementing certifications improves organizations' data security by reducing inappropriate access through a distributed review process and helping them satisfy audit and regulatory requirements. 

A certification refers to SailPoint Identity Security's mechanism for reviewing a user's access to entitlements (sets of permissions) and approving or removing that access. 
These serve as a way of showing that a user's access has been reviewed and approved. 
Multiple certifications by different reviewers are often required to approve a user's access. 
A set of multiple certifications is called a certification campaign.

For example, an organization may use a Manager Certification as a way of showing that a user's access has been reviewed and approved by their manager, or if the certification is part of a campaign, that the user's access has been reviewed and approved by multiple managers. 
Once this certification has been completed, SailPoint Identity Security  would provision all the access the user needs, nothing more. 

Organization administrators or certification administrators can designate other SailPoint Identity Security users as certification reviewers. 
Those reviewers can select the 'Certifications' tab to view any of the certifications they either need to review or have already reviewed under the 'Active' and 'Completed' tabs, respectively. 

When a certification campaign is in progress, certification reviewers will see certifications listed under 'Active,' where they can review the involved identities. 
Under the 'Decision' column on the right, next to each access item, reviewers can select the checkmark to approve access, select the 'X' to revoke access, or they can toggle the 'More Options' menu to reassign the certification to another reviewer and provide a reason for reassignment in the form of a comment. 

Once a reviewer has made decisions on all the certification's involved access items, he or she must select 'Sign Off' to complete the review process.
Doing so converts the certification into read-only status, preventing any further changes to the review decisions and deleting the work item (task) from the reviewer's list of work items. 

Once all the reviewers have signed off, the certification campaign either completes or, if any reviewers decided to revoke access for any of the involved identities, it moves into a remediation phase. In the remediation phase, identities' entitlements are altered to remove any entitlements marked for revocation.
In this situation, the certification campaign completes once all the remediation requests are completed.




```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```
      