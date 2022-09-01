---
id: api-calls
slug: /docs/saas-connectivity/in-depth/api-calls
---
# API Calls
Calling API endpoints sequentially for hundreds or thousands of accounts is slow. If several API calls are required to build a user’s account, then it is recommended that you use asynchronous functions to speed up this task. Asynchronous functions allow your program to execute several commands at once, which is especially important for high latency commands like calling API endpoints - each call to an endpoint can take anywhere from several milliseconds to several seconds. The following code snippet from [discourse-client.ts](https://github.com/sailpoint-oss/discourse-connector-2/blob/main/Discourse/src/discourse-client.ts) shows how you can use asynchronous functions to quickly build a list of account profiles for your source’s users:

```javascript
async getUsers(): Promise<User[]> {
        // First, get the members of the group.  This will call a single endpoint to get all the users of a group.
        const groupMembers = await this.getGroupMembers(this.primaryGroup!)

        // To get the full user representation, we need to invoke a single API call for each user.
        // Because there can be hundreds, or even thousands of users, this would take several minutes
        // if run sequentially.  We use Promise.all to execute a list of API calls in parallel.
        let users = await Promise.all(groupMembers.map(member => this.getUser(member.id!.toString())))

        // Emails aren't included in the above call.  Once again, we need to execute several API calls
        // in parallel.
        const emails = await Promise.all(groupMembers.map(member => this.getUserEmailAddress(member.username!)))

        // Finally, we need to update our user accounts with the emails we obtained.  This code
        // doesn't make network calls, so it doesn't need to use Promise.all.
        for (let i = 0; i < groupMembers.length; i++) {
            users[i].email = emails[i]
        }

        return users
    }

```
- Line 3 gets all the user IDs for a default group to which all the users you want to track are assigned. 

- Line 6 gets more attributes for each user present in the group. There can be hundreds of users who need their attributes fetched, so use Promise.all to build and execute the API calls asynchronously, speeding up the operation’s completion time.

- Line 9 uses the same strategy as Line 6, except it calls another endpoint that will get each user’s email address, which isn’t present in the previous API call. Use Promise.all again to speed up the operation.

- Line 12-14 combines the data you gathered from the preceding calls to complete your user accounts.

>📘 As a general guideline, any time you must execute several API calls that all call the same endpoint, it is recommended that you use Promise.all to speed up the operation.