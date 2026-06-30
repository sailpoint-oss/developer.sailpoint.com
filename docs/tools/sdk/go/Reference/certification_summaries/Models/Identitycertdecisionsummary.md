---
id: v1-identitycertdecisionsummary
title: Identitycertdecisionsummary
pagination_label: Identitycertdecisionsummary
sidebar_label: Identitycertdecisionsummary
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Identitycertdecisionsummary', 'V1Identitycertdecisionsummary'] 
slug: /tools/sdk/go/certificationsummaries/models/identitycertdecisionsummary
tags: ['SDK', 'Software Development Kit', 'Identitycertdecisionsummary', 'V1Identitycertdecisionsummary']
---

# Identitycertdecisionsummary

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

### NewIdentitycertdecisionsummary

`func NewIdentitycertdecisionsummary() *Identitycertdecisionsummary`

NewIdentitycertdecisionsummary instantiates a new Identitycertdecisionsummary object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIdentitycertdecisionsummaryWithDefaults

`func NewIdentitycertdecisionsummaryWithDefaults() *Identitycertdecisionsummary`

NewIdentitycertdecisionsummaryWithDefaults instantiates a new Identitycertdecisionsummary object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEntitlementDecisionsMade

`func (o *Identitycertdecisionsummary) GetEntitlementDecisionsMade() int32`

GetEntitlementDecisionsMade returns the EntitlementDecisionsMade field if non-nil, zero value otherwise.

### GetEntitlementDecisionsMadeOk

`func (o *Identitycertdecisionsummary) GetEntitlementDecisionsMadeOk() (*int32, bool)`

GetEntitlementDecisionsMadeOk returns a tuple with the EntitlementDecisionsMade field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntitlementDecisionsMade

`func (o *Identitycertdecisionsummary) SetEntitlementDecisionsMade(v int32)`

SetEntitlementDecisionsMade sets EntitlementDecisionsMade field to given value.

### HasEntitlementDecisionsMade

`func (o *Identitycertdecisionsummary) HasEntitlementDecisionsMade() bool`

HasEntitlementDecisionsMade returns a boolean if a field has been set.

### GetAccessProfileDecisionsMade

`func (o *Identitycertdecisionsummary) GetAccessProfileDecisionsMade() int32`

GetAccessProfileDecisionsMade returns the AccessProfileDecisionsMade field if non-nil, zero value otherwise.

### GetAccessProfileDecisionsMadeOk

`func (o *Identitycertdecisionsummary) GetAccessProfileDecisionsMadeOk() (*int32, bool)`

GetAccessProfileDecisionsMadeOk returns a tuple with the AccessProfileDecisionsMade field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessProfileDecisionsMade

`func (o *Identitycertdecisionsummary) SetAccessProfileDecisionsMade(v int32)`

SetAccessProfileDecisionsMade sets AccessProfileDecisionsMade field to given value.

### HasAccessProfileDecisionsMade

`func (o *Identitycertdecisionsummary) HasAccessProfileDecisionsMade() bool`

HasAccessProfileDecisionsMade returns a boolean if a field has been set.

### GetRoleDecisionsMade

`func (o *Identitycertdecisionsummary) GetRoleDecisionsMade() int32`

GetRoleDecisionsMade returns the RoleDecisionsMade field if non-nil, zero value otherwise.

### GetRoleDecisionsMadeOk

`func (o *Identitycertdecisionsummary) GetRoleDecisionsMadeOk() (*int32, bool)`

GetRoleDecisionsMadeOk returns a tuple with the RoleDecisionsMade field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoleDecisionsMade

`func (o *Identitycertdecisionsummary) SetRoleDecisionsMade(v int32)`

SetRoleDecisionsMade sets RoleDecisionsMade field to given value.

### HasRoleDecisionsMade

`func (o *Identitycertdecisionsummary) HasRoleDecisionsMade() bool`

HasRoleDecisionsMade returns a boolean if a field has been set.

### GetAccountDecisionsMade

`func (o *Identitycertdecisionsummary) GetAccountDecisionsMade() int32`

GetAccountDecisionsMade returns the AccountDecisionsMade field if non-nil, zero value otherwise.

### GetAccountDecisionsMadeOk

`func (o *Identitycertdecisionsummary) GetAccountDecisionsMadeOk() (*int32, bool)`

GetAccountDecisionsMadeOk returns a tuple with the AccountDecisionsMade field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountDecisionsMade

`func (o *Identitycertdecisionsummary) SetAccountDecisionsMade(v int32)`

SetAccountDecisionsMade sets AccountDecisionsMade field to given value.

### HasAccountDecisionsMade

`func (o *Identitycertdecisionsummary) HasAccountDecisionsMade() bool`

HasAccountDecisionsMade returns a boolean if a field has been set.

### GetEntitlementDecisionsTotal

`func (o *Identitycertdecisionsummary) GetEntitlementDecisionsTotal() int32`

GetEntitlementDecisionsTotal returns the EntitlementDecisionsTotal field if non-nil, zero value otherwise.

### GetEntitlementDecisionsTotalOk

`func (o *Identitycertdecisionsummary) GetEntitlementDecisionsTotalOk() (*int32, bool)`

GetEntitlementDecisionsTotalOk returns a tuple with the EntitlementDecisionsTotal field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntitlementDecisionsTotal

`func (o *Identitycertdecisionsummary) SetEntitlementDecisionsTotal(v int32)`

SetEntitlementDecisionsTotal sets EntitlementDecisionsTotal field to given value.

### HasEntitlementDecisionsTotal

`func (o *Identitycertdecisionsummary) HasEntitlementDecisionsTotal() bool`

HasEntitlementDecisionsTotal returns a boolean if a field has been set.

### GetAccessProfileDecisionsTotal

`func (o *Identitycertdecisionsummary) GetAccessProfileDecisionsTotal() int32`

GetAccessProfileDecisionsTotal returns the AccessProfileDecisionsTotal field if non-nil, zero value otherwise.

### GetAccessProfileDecisionsTotalOk

`func (o *Identitycertdecisionsummary) GetAccessProfileDecisionsTotalOk() (*int32, bool)`

GetAccessProfileDecisionsTotalOk returns a tuple with the AccessProfileDecisionsTotal field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessProfileDecisionsTotal

`func (o *Identitycertdecisionsummary) SetAccessProfileDecisionsTotal(v int32)`

SetAccessProfileDecisionsTotal sets AccessProfileDecisionsTotal field to given value.

### HasAccessProfileDecisionsTotal

`func (o *Identitycertdecisionsummary) HasAccessProfileDecisionsTotal() bool`

HasAccessProfileDecisionsTotal returns a boolean if a field has been set.

### GetRoleDecisionsTotal

`func (o *Identitycertdecisionsummary) GetRoleDecisionsTotal() int32`

GetRoleDecisionsTotal returns the RoleDecisionsTotal field if non-nil, zero value otherwise.

### GetRoleDecisionsTotalOk

`func (o *Identitycertdecisionsummary) GetRoleDecisionsTotalOk() (*int32, bool)`

GetRoleDecisionsTotalOk returns a tuple with the RoleDecisionsTotal field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoleDecisionsTotal

`func (o *Identitycertdecisionsummary) SetRoleDecisionsTotal(v int32)`

SetRoleDecisionsTotal sets RoleDecisionsTotal field to given value.

### HasRoleDecisionsTotal

`func (o *Identitycertdecisionsummary) HasRoleDecisionsTotal() bool`

HasRoleDecisionsTotal returns a boolean if a field has been set.

### GetAccountDecisionsTotal

`func (o *Identitycertdecisionsummary) GetAccountDecisionsTotal() int32`

GetAccountDecisionsTotal returns the AccountDecisionsTotal field if non-nil, zero value otherwise.

### GetAccountDecisionsTotalOk

`func (o *Identitycertdecisionsummary) GetAccountDecisionsTotalOk() (*int32, bool)`

GetAccountDecisionsTotalOk returns a tuple with the AccountDecisionsTotal field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountDecisionsTotal

`func (o *Identitycertdecisionsummary) SetAccountDecisionsTotal(v int32)`

SetAccountDecisionsTotal sets AccountDecisionsTotal field to given value.

### HasAccountDecisionsTotal

`func (o *Identitycertdecisionsummary) HasAccountDecisionsTotal() bool`

HasAccountDecisionsTotal returns a boolean if a field has been set.

### GetEntitlementsApproved

`func (o *Identitycertdecisionsummary) GetEntitlementsApproved() int32`

GetEntitlementsApproved returns the EntitlementsApproved field if non-nil, zero value otherwise.

### GetEntitlementsApprovedOk

`func (o *Identitycertdecisionsummary) GetEntitlementsApprovedOk() (*int32, bool)`

GetEntitlementsApprovedOk returns a tuple with the EntitlementsApproved field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntitlementsApproved

`func (o *Identitycertdecisionsummary) SetEntitlementsApproved(v int32)`

SetEntitlementsApproved sets EntitlementsApproved field to given value.

### HasEntitlementsApproved

`func (o *Identitycertdecisionsummary) HasEntitlementsApproved() bool`

HasEntitlementsApproved returns a boolean if a field has been set.

### GetEntitlementsRevoked

`func (o *Identitycertdecisionsummary) GetEntitlementsRevoked() int32`

GetEntitlementsRevoked returns the EntitlementsRevoked field if non-nil, zero value otherwise.

### GetEntitlementsRevokedOk

`func (o *Identitycertdecisionsummary) GetEntitlementsRevokedOk() (*int32, bool)`

GetEntitlementsRevokedOk returns a tuple with the EntitlementsRevoked field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntitlementsRevoked

`func (o *Identitycertdecisionsummary) SetEntitlementsRevoked(v int32)`

SetEntitlementsRevoked sets EntitlementsRevoked field to given value.

### HasEntitlementsRevoked

`func (o *Identitycertdecisionsummary) HasEntitlementsRevoked() bool`

HasEntitlementsRevoked returns a boolean if a field has been set.

### GetAccessProfilesApproved

`func (o *Identitycertdecisionsummary) GetAccessProfilesApproved() int32`

GetAccessProfilesApproved returns the AccessProfilesApproved field if non-nil, zero value otherwise.

### GetAccessProfilesApprovedOk

`func (o *Identitycertdecisionsummary) GetAccessProfilesApprovedOk() (*int32, bool)`

GetAccessProfilesApprovedOk returns a tuple with the AccessProfilesApproved field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessProfilesApproved

`func (o *Identitycertdecisionsummary) SetAccessProfilesApproved(v int32)`

SetAccessProfilesApproved sets AccessProfilesApproved field to given value.

### HasAccessProfilesApproved

`func (o *Identitycertdecisionsummary) HasAccessProfilesApproved() bool`

HasAccessProfilesApproved returns a boolean if a field has been set.

### GetAccessProfilesRevoked

`func (o *Identitycertdecisionsummary) GetAccessProfilesRevoked() int32`

GetAccessProfilesRevoked returns the AccessProfilesRevoked field if non-nil, zero value otherwise.

### GetAccessProfilesRevokedOk

`func (o *Identitycertdecisionsummary) GetAccessProfilesRevokedOk() (*int32, bool)`

GetAccessProfilesRevokedOk returns a tuple with the AccessProfilesRevoked field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessProfilesRevoked

`func (o *Identitycertdecisionsummary) SetAccessProfilesRevoked(v int32)`

SetAccessProfilesRevoked sets AccessProfilesRevoked field to given value.

### HasAccessProfilesRevoked

`func (o *Identitycertdecisionsummary) HasAccessProfilesRevoked() bool`

HasAccessProfilesRevoked returns a boolean if a field has been set.

### GetRolesApproved

`func (o *Identitycertdecisionsummary) GetRolesApproved() int32`

GetRolesApproved returns the RolesApproved field if non-nil, zero value otherwise.

### GetRolesApprovedOk

`func (o *Identitycertdecisionsummary) GetRolesApprovedOk() (*int32, bool)`

GetRolesApprovedOk returns a tuple with the RolesApproved field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRolesApproved

`func (o *Identitycertdecisionsummary) SetRolesApproved(v int32)`

SetRolesApproved sets RolesApproved field to given value.

### HasRolesApproved

`func (o *Identitycertdecisionsummary) HasRolesApproved() bool`

HasRolesApproved returns a boolean if a field has been set.

### GetRolesRevoked

`func (o *Identitycertdecisionsummary) GetRolesRevoked() int32`

GetRolesRevoked returns the RolesRevoked field if non-nil, zero value otherwise.

### GetRolesRevokedOk

`func (o *Identitycertdecisionsummary) GetRolesRevokedOk() (*int32, bool)`

GetRolesRevokedOk returns a tuple with the RolesRevoked field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRolesRevoked

`func (o *Identitycertdecisionsummary) SetRolesRevoked(v int32)`

SetRolesRevoked sets RolesRevoked field to given value.

### HasRolesRevoked

`func (o *Identitycertdecisionsummary) HasRolesRevoked() bool`

HasRolesRevoked returns a boolean if a field has been set.

### GetAccountsApproved

`func (o *Identitycertdecisionsummary) GetAccountsApproved() int32`

GetAccountsApproved returns the AccountsApproved field if non-nil, zero value otherwise.

### GetAccountsApprovedOk

`func (o *Identitycertdecisionsummary) GetAccountsApprovedOk() (*int32, bool)`

GetAccountsApprovedOk returns a tuple with the AccountsApproved field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountsApproved

`func (o *Identitycertdecisionsummary) SetAccountsApproved(v int32)`

SetAccountsApproved sets AccountsApproved field to given value.

### HasAccountsApproved

`func (o *Identitycertdecisionsummary) HasAccountsApproved() bool`

HasAccountsApproved returns a boolean if a field has been set.

### GetAccountsRevoked

`func (o *Identitycertdecisionsummary) GetAccountsRevoked() int32`

GetAccountsRevoked returns the AccountsRevoked field if non-nil, zero value otherwise.

### GetAccountsRevokedOk

`func (o *Identitycertdecisionsummary) GetAccountsRevokedOk() (*int32, bool)`

GetAccountsRevokedOk returns a tuple with the AccountsRevoked field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountsRevoked

`func (o *Identitycertdecisionsummary) SetAccountsRevoked(v int32)`

SetAccountsRevoked sets AccountsRevoked field to given value.

### HasAccountsRevoked

`func (o *Identitycertdecisionsummary) HasAccountsRevoked() bool`

HasAccountsRevoked returns a boolean if a field has been set.


