# Identitycollectortype

# Identitycollectortype

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | `string` | Identity collector type display name. Matches the `type` values returned by list and used by create/update metadata. Base types only (for example `Box`, not `Box SaaS`). | [default to undefined]
**iscConnectorNames** | `Array<string>` | Exact ISC `connectorName` values to use in `GET /v3/sources` filters (`connectorName eq \"...\"`). These are not always equal to `type` (for example Google Drive maps to `G Suite` and `Google Workspace SaaS`). | [default to undefined]

