---
id: disable-access-profile-requests
title: Disable Access Profile Requests
pagination_label: Disable Access Profile Requests
sidebar_label: Disable Access Profile Requests
sidebar_position: 1
sidebar_class_name: disableAccessProfileRequests
keywords: ['access', 'request', 'access profile', 'request center', 'disable']
description: Bulk disable access profile requests.
slug: /guides/disable-access-profile-requests
tags: ['AccessProfileRequestManagement']
---

## Overview

In Identity Security Cloud, [access profiles](https://documentation.sailpoint.com/saas/help/access/access-profiles.html) are groups of [entitlements](https://documentation.sailpoint.com/saas/help/access/entitlements.html), which represent access rights on [sources](https://documentation.sailpoint.com/saas/help/sources/index.html). By default, all access profiles are marked as requestable. This means that an organization's users can submit [access requests](https://documentation.sailpoint.com/saas/help/requests/index.html) for the access profiles in the Identity Security Cloud [Request Center](https://documentation.sailpoint.com/saas/user-help/requests/request_center.html), where all access profiles are listed.

You can disable requests for access profiles to prevent users from gaining inappropriate or undesired access. In the UI, you can edit the [individual access profile](https://documentation.sailpoint.com/saas/help/requests/config_ap_roles.html#configuring-access-profiles-for-requests) to disable requests for the access profile. You can also use the [PATCH Access Profile endpoint](https://developer.sailpoint.com/docs/api/v3/patch-access-profile) to mark the individual access profile as non-requestable.

You may have many access profiles that you want to disable requests for, and you don't want one to get overlooked and then inappropriately accessed. There are three different processes you can use to ensure that you have disabled requests for all access profiles that aren't currently associated with [applications](https://documentation.sailpoint.com/saas/help/common/app-config.html) configured for access requests. Read this guide to learn how to perform these processes.

## Disable requests for individual access profiles with the UI

Follow these steps to use the Identity Security Cloud UI to individually disable requests for all access profiles that aren't currently associated with applications:

1. Identify the access profiles that are associated with applications configured for access requests. Create a list of these associated access profiles.

- Go to **Admin > Applications** and open each application you use for access requests. These applications have both 'Visible in the Request Center' and 'Allow Access Requests' marked on the 'Configuration' tab.
- Go to the application's 'Access' tab and capture the names of each application's associated access profiles, recording them in your list of access profiles.

2. Edit each access profile that is **not** in your list to disable access requests.

- Go to **Admin > Access > Access Profiles** to view a list of all access profiles.
- For each access profile that isn't in your list of those associated with applications configured for access requests, select 'Edit', go to the 'Access Requests' tab, and disable 'Allow Access Requests'. Then save your changes.

Once you have performed this process, all the access profiles that aren't currently associated with applications will no longer be requestable.

## Disable requests for individual access profiles with the API

Follow these steps to use two API endpoints to individually disable access requests for all access profiles that aren't currently associated with applications:

1. Use the [Search endpoint](https://developer.sailpoint.com/docs/api/v3/search-post) to identify the access profiles that are **not** associated with applications configured for access requests. Sending the following query will return a list of these unassociated access profiles.

- Provide this request body. It will return all access profiles that have a null or empty `apps` list.

```
{
    "queryDsl": {
        "bool": {
            "must_not": [
                {
                    "nested": {
                        "path": "apps",
                            "query": {
                            "exists": {
                                "field": "apps"
                            }
                        }
                    }
                }
            ]
        }
    },
    "queryType": "DSL",
    "indices": [
            "accessprofiles"
        ],
    "sort": [
        "name"
    ]
}
```

- The response body will include all the details of each unassociated access profile. Extract the `id` for each access profile returned.

2. Use the [PATCH Access Profile endpoint](https://developer.sailpoint.com/docs/api/v3/patch-access-profile) and provide the unassociated access profile's `id` to update the specified access profile's `requestable` field.

- Provide this request body. It will use the `replace` operation to update the value in the specified access profile's `requestable` path to `false`.

```
[
  {
    "op": "replace",
    "path": "/requestable",
    "value": "false"
  }
]
```

- After a successful PATCH update, the response body will include all the specified access profile's details, including the updated `false` value in the `requestable` path.

Once you have performed this process for each of the unassociated access profiles returned in your search, all the access profiles that aren't associated with applications will no longer be requestable.

## Bulk disable requests for access profiles with the API

Follow these steps to use two API endpoints to bulk disable access requests for all access profiles that aren't currently associated with applications:

1. Use the [Search endpoint](https://developer.sailpoint.com/docs/api/v3/search-post) to identify the access profiles that are **not** associated with applications configured for access requests. Sending the following query will return a list of these unassociated access profiles.

- Provide this request body. It will return all access profiles that have a null or empty `apps` list.

```
{
    "queryDsl": {
        "bool": {
            "must_not": [
                {
                    "nested": {
                        "path": "apps",
                            "query": {
                            "exists": {
                                "field": "apps"
                            }
                        }
                    }
                }
            ]
        }
    },
    "queryType": "DSL",
    "indices": [
            "accessprofiles"
        ],
    "sort": [
        "name"
    ]
}
```

- The response body will include all the details of each unassociated access profile. Extract the `id` for each access profile returned.

2. Use the [Update Requestability for Access Profiles endpoint](https://developer.sailpoint.com/docs/api/beta/update-access-profiles-in-bulk) and provide every unassociated access profile's `id`, along with the updated values for their `requestable` fields.

- Provide this request body. It can bulk update all the access profiles you specify - you just need to specify each access profile's `id` and the `requestable` value you want for the access profile.

```
[
    {
        "id": "813b1e19281645278f9c9f665ea911c9",
        "requestable": "false"
    },
    {
        "id": "c80bd9a30d42468f9a3646f39cdd7c74",
        "requestable": "false"
    }
 ]
```

- After a successful update, the response body will include the `id` and new `requestable` values for all the updated access profiles, along with confirmations that they were successfully updated.

Once you have performed this process for all the unassociated access profiles returned in your search, all the access profiles that aren't associated with applications will no longer be requestable.
