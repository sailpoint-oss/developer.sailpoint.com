---
id: v2025-identity-cert-decision-summary
title: IdentityCertDecisionSummary
pagination_label: IdentityCertDecisionSummary
sidebar_label: IdentityCertDecisionSummary
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'IdentityCertDecisionSummary', 'V2025IdentityCertDecisionSummary'] 
slug: /tools/sdk/go/v2025/models/identity-cert-decision-summary
tags: ['SDK', 'Software Development Kit', 'IdentityCertDecisionSummary', 'V2025IdentityCertDecisionSummary']
---

# IdentityCertDecisionSummary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EntitlementDecisionsMade** | Pointer to **int32** | Number of entitlement decisions that have been made | [optional] 
**AccessProfileDecisionsMade** | Pointer to **int32** | Number of access profile decisions that have been made | [optional] 
**RoleDecisionsMade** | Pointer to **int32** | Number of role decisions that have been made | [optional] 
**AccountDecisionsMade** | Pointer to **int32** | Number of account decisions that have been made | [optional] 
**EntitlementDecisionsTotal** | Pointer to **int32** | The total number of entitlement decisions on the certification, both complete and incomplete | [optional] 
**AccessProfileDecisionsTotal** | Pointer to **int32** | The total number of access profile decisions on the certification, both complete and incomplete | [optional] 
**RoleDecisionsTotal** | Pointer to **int32** | The total number of role decisions on the certification, both complete and incomplete | [optional] 
**AccountDecisionsTotal** | Pointer to **int32** | The total number of account decisions on the certification, both complete and incomplete | [optional] 
**EntitlementsApproved** | Pointer to **int32** | The number of entitlement decisions that have been made which were approved | [optional] 
**EntitlementsRevoked** | Pointer to **int32** | The number of entitlement decisions that have been made which were revoked | [optional] 
**AccessProfilesApproved** | Pointer to **int32** | The number of access profile decisions that have been made which were approved | [optional] 
**AccessProfilesRevoked** | Pointer to **int32** | The number of access profile decisions that have been made which were revoked | [optional] 
**RolesApproved** | Pointer to **int32** | The number of role decisions that have been made which were approved | [optional] 
**RolesRevoked** | Pointer to **int32** | The number of role decisions that have been made which were revoked | [optional] 
**AccountsApproved** | Pointer to **int32** | The number of account decisions that have been made which were approved | [optional] 
**AccountsRevoked** | Pointer to **int32** | The number of account decisions that have been made which were revoked | [optional] 

## Methods

### NewIdentityCertDecisionSummary

`func NewIdentityCertDecisionSummary() *IdentityCertDecisionSummary`

NewIdentityCertDecisionSummary instantiates a new IdentityCertDecisionSummary object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIdentityCertDecisionSummaryWithDefaults

`func NewIdentityCertDecisionSummaryWithDefaults() *IdentityCertDecisionSummary`

NewIdentityCertDecisionSummaryWithDefaults instantiates a new IdentityCertDecisionSummary object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEntitlementDecisionsMade

`func (o *IdentityCertDecisionSummary) GetEntitlementDecisionsMade() int32`

GetEntitlementDecisionsMade returns the EntitlementDecisionsMade field if non-nil, zero value otherwise.

### GetEntitlementDecisionsMadeOk

`func (o *IdentityCertDecisionSummary) GetEntitlementDecisionsMadeOk() (*int32, bool)`

GetEntitlementDecisionsMadeOk returns a tuple with the EntitlementDecisionsMade field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntitlementDecisionsMade

`func (o *IdentityCertDecisionSummary) SetEntitlementDecisionsMade(v int32)`

SetEntitlementDecisionsMade sets EntitlementDecisionsMade field to given value.

### HasEntitlementDecisionsMade

`func (o *IdentityCertDecisionSummary) HasEntitlementDecisionsMade() bool`

HasEntitlementDecisionsMade returns a boolean if a field has been set.

### GetAccessProfileDecisionsMade

`func (o *IdentityCertDecisionSummary) GetAccessProfileDecisionsMade() int32`

GetAccessProfileDecisionsMade returns the AccessProfileDecisionsMade field if non-nil, zero value otherwise.

### GetAccessProfileDecisionsMadeOk

`func (o *IdentityCertDecisionSummary) GetAccessProfileDecisionsMadeOk() (*int32, bool)`

GetAccessProfileDecisionsMadeOk returns a tuple with the AccessProfileDecisionsMade field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessProfileDecisionsMade

`func (o *IdentityCertDecisionSummary) SetAccessProfileDecisionsMade(v int32)`

SetAccessProfileDecisionsMade sets AccessProfileDecisionsMade field to given value.

### HasAccessProfileDecisionsMade

`func (o *IdentityCertDecisionSummary) HasAccessProfileDecisionsMade() bool`

HasAccessProfileDecisionsMade returns a boolean if a field has been set.

### GetRoleDecisionsMade

`func (o *IdentityCertDecisionSummary) GetRoleDecisionsMade() int32`

GetRoleDecisionsMade returns the RoleDecisionsMade field if non-nil, zero value otherwise.

### GetRoleDecisionsMadeOk

`func (o *IdentityCertDecisionSummary) GetRoleDecisionsMadeOk() (*int32, bool)`

GetRoleDecisionsMadeOk returns a tuple with the RoleDecisionsMade field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoleDecisionsMade

`func (o *IdentityCertDecisionSummary) SetRoleDecisionsMade(v int32)`

SetRoleDecisionsMade sets RoleDecisionsMade field to given value.

### HasRoleDecisionsMade

`func (o *IdentityCertDecisionSummary) HasRoleDecisionsMade() bool`

HasRoleDecisionsMade returns a boolean if a field has been set.

### GetAccountDecisionsMade

`func (o *IdentityCertDecisionSummary) GetAccountDecisionsMade() int32`

GetAccountDecisionsMade returns the AccountDecisionsMade field if non-nil, zero value otherwise.

### GetAccountDecisionsMadeOk

`func (o *IdentityCertDecisionSummary) GetAccountDecisionsMadeOk() (*int32, bool)`

GetAccountDecisionsMadeOk returns a tuple with the AccountDecisionsMade field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountDecisionsMade

`func (o *IdentityCertDecisionSummary) SetAccountDecisionsMade(v int32)`

SetAccountDecisionsMade sets AccountDecisionsMade field to given value.

### HasAccountDecisionsMade

`func (o *IdentityCertDecisionSummary) HasAccountDecisionsMade() bool`

HasAccountDecisionsMade returns a boolean if a field has been set.

### GetEntitlementDecisionsTotal

`func (o *IdentityCertDecisionSummary) GetEntitlementDecisionsTotal() int32`

GetEntitlementDecisionsTotal returns the EntitlementDecisionsTotal field if non-nil, zero value otherwise.

### GetEntitlementDecisionsTotalOk

`func (o *IdentityCertDecisionSummary) GetEntitlementDecisionsTotalOk() (*int32, bool)`

GetEntitlementDecisionsTotalOk returns a tuple with the EntitlementDecisionsTotal field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntitlementDecisionsTotal

`func (o *IdentityCertDecisionSummary) SetEntitlementDecisionsTotal(v int32)`

SetEntitlementDecisionsTotal sets EntitlementDecisionsTotal field to given value.

### HasEntitlementDecisionsTotal

`func (o *IdentityCertDecisionSummary) HasEntitlementDecisionsTotal() bool`

HasEntitlementDecisionsTotal returns a boolean if a field has been set.

### GetAccessProfileDecisionsTotal

`func (o *IdentityCertDecisionSummary) GetAccessProfileDecisionsTotal() int32`

GetAccessProfileDecisionsTotal returns the AccessProfileDecisionsTotal field if non-nil, zero value otherwise.

### GetAccessProfileDecisionsTotalOk

`func (o *IdentityCertDecisionSummary) GetAccessProfileDecisionsTotalOk() (*int32, bool)`

GetAccessProfileDecisionsTotalOk returns a tuple with the AccessProfileDecisionsTotal field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessProfileDecisionsTotal

`func (o *IdentityCertDecisionSummary) SetAccessProfileDecisionsTotal(v int32)`

SetAccessProfileDecisionsTotal sets AccessProfileDecisionsTotal field to given value.

### HasAccessProfileDecisionsTotal

`func (o *IdentityCertDecisionSummary) HasAccessProfileDecisionsTotal() bool`

HasAccessProfileDecisionsTotal returns a boolean if a field has been set.

### GetRoleDecisionsTotal

`func (o *IdentityCertDecisionSummary) GetRoleDecisionsTotal() int32`

GetRoleDecisionsTotal returns the RoleDecisionsTotal field if non-nil, zero value otherwise.

### GetRoleDecisionsTotalOk

`func (o *IdentityCertDecisionSummary) GetRoleDecisionsTotalOk() (*int32, bool)`

GetRoleDecisionsTotalOk returns a tuple with the RoleDecisionsTotal field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoleDecisionsTotal

`func (o *IdentityCertDecisionSummary) SetRoleDecisionsTotal(v int32)`

SetRoleDecisionsTotal sets RoleDecisionsTotal field to given value.

### HasRoleDecisionsTotal

`func (o *IdentityCertDecisionSummary) HasRoleDecisionsTotal() bool`

HasRoleDecisionsTotal returns a boolean if a field has been set.

### GetAccountDecisionsTotal

`func (o *IdentityCertDecisionSummary) GetAccountDecisionsTotal() int32`

GetAccountDecisionsTotal returns the AccountDecisionsTotal field if non-nil, zero value otherwise.

### GetAccountDecisionsTotalOk

`func (o *IdentityCertDecisionSummary) GetAccountDecisionsTotalOk() (*int32, bool)`

GetAccountDecisionsTotalOk returns a tuple with the AccountDecisionsTotal field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountDecisionsTotal

`func (o *IdentityCertDecisionSummary) SetAccountDecisionsTotal(v int32)`

SetAccountDecisionsTotal sets AccountDecisionsTotal field to given value.

### HasAccountDecisionsTotal

`func (o *IdentityCertDecisionSummary) HasAccountDecisionsTotal() bool`

HasAccountDecisionsTotal returns a boolean if a field has been set.

### GetEntitlementsApproved

`func (o *IdentityCertDecisionSummary) GetEntitlementsApproved() int32`

GetEntitlementsApproved returns the EntitlementsApproved field if non-nil, zero value otherwise.

### GetEntitlementsApprovedOk

`func (o *IdentityCertDecisionSummary) GetEntitlementsApprovedOk() (*int32, bool)`

GetEntitlementsApprovedOk returns a tuple with the EntitlementsApproved field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntitlementsApproved

`func (o *IdentityCertDecisionSummary) SetEntitlementsApproved(v int32)`

SetEntitlementsApproved sets EntitlementsApproved field to given value.

### HasEntitlementsApproved

`func (o *IdentityCertDecisionSummary) HasEntitlementsApproved() bool`

HasEntitlementsApproved returns a boolean if a field has been set.

### GetEntitlementsRevoked

`func (o *IdentityCertDecisionSummary) GetEntitlementsRevoked() int32`

GetEntitlementsRevoked returns the EntitlementsRevoked field if non-nil, zero value otherwise.

### GetEntitlementsRevokedOk

`func (o *IdentityCertDecisionSummary) GetEntitlementsRevokedOk() (*int32, bool)`

GetEntitlementsRevokedOk returns a tuple with the EntitlementsRevoked field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntitlementsRevoked

`func (o *IdentityCertDecisionSummary) SetEntitlementsRevoked(v int32)`

SetEntitlementsRevoked sets EntitlementsRevoked field to given value.

### HasEntitlementsRevoked

`func (o *IdentityCertDecisionSummary) HasEntitlementsRevoked() bool`

HasEntitlementsRevoked returns a boolean if a field has been set.

### GetAccessProfilesApproved

`func (o *IdentityCertDecisionSummary) GetAccessProfilesApproved() int32`

GetAccessProfilesApproved returns the AccessProfilesApproved field if non-nil, zero value otherwise.

### GetAccessProfilesApprovedOk

`func (o *IdentityCertDecisionSummary) GetAccessProfilesApprovedOk() (*int32, bool)`

GetAccessProfilesApprovedOk returns a tuple with the AccessProfilesApproved field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessProfilesApproved

`func (o *IdentityCertDecisionSummary) SetAccessProfilesApproved(v int32)`

SetAccessProfilesApproved sets AccessProfilesApproved field to given value.

### HasAccessProfilesApproved

`func (o *IdentityCertDecisionSummary) HasAccessProfilesApproved() bool`

HasAccessProfilesApproved returns a boolean if a field has been set.

### GetAccessProfilesRevoked

`func (o *IdentityCertDecisionSummary) GetAccessProfilesRevoked() int32`

GetAccessProfilesRevoked returns the AccessProfilesRevoked field if non-nil, zero value otherwise.

### GetAccessProfilesRevokedOk

`func (o *IdentityCertDecisionSummary) GetAccessProfilesRevokedOk() (*int32, bool)`

GetAccessProfilesRevokedOk returns a tuple with the AccessProfilesRevoked field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessProfilesRevoked

`func (o *IdentityCertDecisionSummary) SetAccessProfilesRevoked(v int32)`

SetAccessProfilesRevoked sets AccessProfilesRevoked field to given value.

### HasAccessProfilesRevoked

`func (o *IdentityCertDecisionSummary) HasAccessProfilesRevoked() bool`

HasAccessProfilesRevoked returns a boolean if a field has been set.

### GetRolesApproved

`func (o *IdentityCertDecisionSummary) GetRolesApproved() int32`

GetRolesApproved returns the RolesApproved field if non-nil, zero value otherwise.

### GetRolesApprovedOk

`func (o *IdentityCertDecisionSummary) GetRolesApprovedOk() (*int32, bool)`

GetRolesApprovedOk returns a tuple with the RolesApproved field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRolesApproved

`func (o *IdentityCertDecisionSummary) SetRolesApproved(v int32)`

SetRolesApproved sets RolesApproved field to given value.

### HasRolesApproved

`func (o *IdentityCertDecisionSummary) HasRolesApproved() bool`

HasRolesApproved returns a boolean if a field has been set.

### GetRolesRevoked

`func (o *IdentityCertDecisionSummary) GetRolesRevoked() int32`

GetRolesRevoked returns the RolesRevoked field if non-nil, zero value otherwise.

### GetRolesRevokedOk

`func (o *IdentityCertDecisionSummary) GetRolesRevokedOk() (*int32, bool)`

GetRolesRevokedOk returns a tuple with the RolesRevoked field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRolesRevoked

`func (o *IdentityCertDecisionSummary) SetRolesRevoked(v int32)`

SetRolesRevoked sets RolesRevoked field to given value.

### HasRolesRevoked

`func (o *IdentityCertDecisionSummary) HasRolesRevoked() bool`

HasRolesRevoked returns a boolean if a field has been set.

### GetAccountsApproved

`func (o *IdentityCertDecisionSummary) GetAccountsApproved() int32`

GetAccountsApproved returns the AccountsApproved field if non-nil, zero value otherwise.

### GetAccountsApprovedOk

`func (o *IdentityCertDecisionSummary) GetAccountsApprovedOk() (*int32, bool)`

GetAccountsApprovedOk returns a tuple with the AccountsApproved field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountsApproved

`func (o *IdentityCertDecisionSummary) SetAccountsApproved(v int32)`

SetAccountsApproved sets AccountsApproved field to given value.

### HasAccountsApproved

`func (o *IdentityCertDecisionSummary) HasAccountsApproved() bool`

HasAccountsApproved returns a boolean if a field has been set.

### GetAccountsRevoked

`func (o *IdentityCertDecisionSummary) GetAccountsRevoked() int32`

GetAccountsRevoked returns the AccountsRevoked field if non-nil, zero value otherwise.

### GetAccountsRevokedOk

`func (o *IdentityCertDecisionSummary) GetAccountsRevokedOk() (*int32, bool)`

GetAccountsRevokedOk returns a tuple with the AccountsRevoked field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountsRevoked

`func (o *IdentityCertDecisionSummary) SetAccountsRevoked(v int32)`

SetAccountsRevoked sets AccountsRevoked field to given value.

### HasAccountsRevoked

`func (o *IdentityCertDecisionSummary) HasAccountsRevoked() bool`

HasAccountsRevoked returns a boolean if a field has been set.


