---
id: cli-api
title: API
pagination_label: CLI API
sidebar_label: API
sidebar_position: 10
sidebar_class_name: cli-api
keywords: ['cli', 'cli api', 'api']
description: Learn how to use the CLI to make generic api calls in this guide.
slug: /tools/cli/api
tags: ['CLI']
---

Learn how to use the SailPoint CLI to make generic API calls in this guide.

The `api` command makes it easy to call SailPoint APIs and parse the results using JSONPath queries if needed.

- [get](#get-requests)
- [post](#post-requests)
- [patch](#patch-requests)
- [put](#put-requests)
- [delete](#delete-requests)

## Get requests

Run this command to get a list of transforms using the v2025 API:

```shell
sail api get /v2025/transforms
```

You can filter the results using the `--jsonpath` flag or `-j` for short. The following command returns just the names of the transforms:

```shell
sail api get /v2025/transforms --jsonpath "$.*.name"
```

For better readability, you can pretty-print the response using the `--pretty` flag or `-p` for short:

```shell
sail api get /v2025/transforms --jsonpath "$.*.name" --pretty
```

### Headers

To include headers with your API call—such as calling an experimental endpoint—use the `--headers` or `-H` flag:

```shell
sail api get /v2025/entitlements/ -H "X-SailPoint-Experimental:true"
```

### Query parameters

Use the `--query` or `-q` flag to provide query parameters.

For example, run this command to retrieve a list of entitlements owned by a specific identity:

:::tip
Query parameters may need to be escaped depending on their use.
:::

```shell
sail api get /v2025/entitlements -q filters="owner.id eq\"<identity_id>\"" -H "X-SailPoint-Experimental:true"
```

### Multiple query parameters

The `--query` flag can be used multiple times to provide additional query parameters.

Use the following command to return a single entitlement owned by a specific identity:

```shell
sail api get /v2025/entitlements -q filters="owner.id eq\"<identity-id>\"" -q limit=1 -H "X-SailPoint-Experimental:true"
```

## Post requests

Use the `post` subcommand to create resources.

Run the following command to create a basic transform, passing the request body as a string:

```shell
sail api post /v2025/transforms --body '{"name":"ToLowerCase","type":"lower","attributes":{}}'
```

Alternatively, use the `--body-file` or `-f` flag to provide the request body from a file:

```shell
sail api post /v2025/transforms --file-body ./transform.json
```

## Patch requests

Use the `patch` sub command to update resources.

Run the following command to update the owner of an access profile:

```shell
 sail api patch /v2025/access-profiles/<access-profile-id> --body '[{"op":"replace","path":"/owner/id","value":"<identity-id>"}]'
```

## Put requests

Run this command to replace a transform object using the v2025 API:

```shell
sail api put /v2025/transforms/<transform-id> --body '{"name":"ToLowerCase","type":"lower","attributes":{}}'
```

Use the `--body-file` or `-f` flag to provide the body of the request via a file.

```shell
sail api put /v2025/transforms --file-body ./updated-transform.json
```

## Delete requests

Use this command to remove resources from Identity Security Cloud.

Run the following command to remove a transform from your tenant:

```shell
sail api delete /v2025/transforms/<transform-id>
```

## Changing commands together

You can combine the `--jsonpath` flag with tools like [jq](https://jqlang.org/) to chain commands and perform complex operations.

For example, the following script reassigns roles from one owner to another. It uses `--jsonpath` to extract role IDs owned by the source identity, then updates each role with the new owner using `sail api patch`.

```shell
#!/bin/bash

from=$1
to=$2

if [[ -z "$from" || -z "$to" ]]; then
  echo "Usage: $0 <from> <to>"
  exit 1
fi

ids=$(sail api get /v2025/roles -q "filters=owner.id eq \"$from\"" --jsonpath '$.*.id')

for id in $(echo "$ids" | jq -r '.[]'); do
  echo "Patching role ID: $id"
  sail api patch /v2025/roles/"$id" \
    --body "[{\"op\":\"replace\",\"path\":\"/owner/id\",\"value\":\"$to\"}]"
done
```
