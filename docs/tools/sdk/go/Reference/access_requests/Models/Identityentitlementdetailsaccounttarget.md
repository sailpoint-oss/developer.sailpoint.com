---
id: v1-identityentitlementdetailsaccounttarget
title: Identityentitlementdetailsaccounttarget
pagination_label: Identityentitlementdetailsaccounttarget
sidebar_label: Identityentitlementdetailsaccounttarget
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Identityentitlementdetailsaccounttarget', 'V1Identityentitlementdetailsaccounttarget'] 
slug: /tools/sdk/go/accessrequests/models/identityentitlementdetailsaccounttarget
tags: ['SDK', 'Software Development Kit', 'Identityentitlementdetailsaccounttarget', 'V1Identityentitlementdetailsaccounttarget']
---

# Identityentitlementdetailsaccounttarget

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccountId** | Pointer to **string** | The id of account | [optional] 
**AccountName** | Pointer to **string** | The name of account | [optional] 
**AccountUUID** | Pointer to **NullableString** | The UUID representation of the account if available | [optional] 
**SourceId** | Pointer to **string** | The id of Source | [optional] 
**SourceName** | Pointer to **string** | The name of Source | [optional] 
**RemoveDate** | Pointer to **NullableString** | The removal date scheduled for the entitlement on the Identity | [optional] 
**AssignmentId** | Pointer to **NullableString** | The assignmentId of the entitlement on the Identity | [optional] 
**Revocable** | Pointer to **bool** | If the entitlement can be revoked | [optional] [default to false]

## Methods

### NewIdentityentitlementdetailsaccounttarget

`func NewIdentityentitlementdetailsaccounttarget() *Identityentitlementdetailsaccounttarget`

NewIdentityentitlementdetailsaccounttarget instantiates a new Identityentitlementdetailsaccounttarget object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIdentityentitlementdetailsaccounttargetWithDefaults

`func NewIdentityentitlementdetailsaccounttargetWithDefaults() *Identityentitlementdetailsaccounttarget`

NewIdentityentitlementdetailsaccounttargetWithDefaults instantiates a new Identityentitlementdetailsaccounttarget object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccountId

`func (o *Identityentitlementdetailsaccounttarget) GetAccountId() string`

GetAccountId returns the AccountId field if non-nil, zero value otherwise.

### GetAccountIdOk

`func (o *Identityentitlementdetailsaccounttarget) GetAccountIdOk() (*string, bool)`

GetAccountIdOk returns a tuple with the AccountId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountId

`func (o *Identityentitlementdetailsaccounttarget) SetAccountId(v string)`

SetAccountId sets AccountId field to given value.

### HasAccountId

`func (o *Identityentitlementdetailsaccounttarget) HasAccountId() bool`

HasAccountId returns a boolean if a field has been set.

### GetAccountName

`func (o *Identityentitlementdetailsaccounttarget) GetAccountName() string`

GetAccountName returns the AccountName field if non-nil, zero value otherwise.

### GetAccountNameOk

`func (o *Identityentitlementdetailsaccounttarget) GetAccountNameOk() (*string, bool)`

GetAccountNameOk returns a tuple with the AccountName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountName

`func (o *Identityentitlementdetailsaccounttarget) SetAccountName(v string)`

SetAccountName sets AccountName field to given value.

### HasAccountName

`func (o *Identityentitlementdetailsaccounttarget) HasAccountName() bool`

HasAccountName returns a boolean if a field has been set.

### GetAccountUUID

`func (o *Identityentitlementdetailsaccounttarget) GetAccountUUID() string`

GetAccountUUID returns the AccountUUID field if non-nil, zero value otherwise.

### GetAccountUUIDOk

`func (o *Identityentitlementdetailsaccounttarget) GetAccountUUIDOk() (*string, bool)`

GetAccountUUIDOk returns a tuple with the AccountUUID field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountUUID

`func (o *Identityentitlementdetailsaccounttarget) SetAccountUUID(v string)`

SetAccountUUID sets AccountUUID field to given value.

### HasAccountUUID

`func (o *Identityentitlementdetailsaccounttarget) HasAccountUUID() bool`

HasAccountUUID returns a boolean if a field has been set.

### SetAccountUUIDNil

`func (o *Identityentitlementdetailsaccounttarget) SetAccountUUIDNil(b bool)`

 SetAccountUUIDNil sets the value for AccountUUID to be an explicit nil

### UnsetAccountUUID
`func (o *Identityentitlementdetailsaccounttarget) UnsetAccountUUID()`

UnsetAccountUUID ensures that no value is present for AccountUUID, not even an explicit nil
### GetSourceId

`func (o *Identityentitlementdetailsaccounttarget) GetSourceId() string`

GetSourceId returns the SourceId field if non-nil, zero value otherwise.

### GetSourceIdOk

`func (o *Identityentitlementdetailsaccounttarget) GetSourceIdOk() (*string, bool)`

GetSourceIdOk returns a tuple with the SourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceId

`func (o *Identityentitlementdetailsaccounttarget) SetSourceId(v string)`

SetSourceId sets SourceId field to given value.

### HasSourceId

`func (o *Identityentitlementdetailsaccounttarget) HasSourceId() bool`

HasSourceId returns a boolean if a field has been set.

### GetSourceName

`func (o *Identityentitlementdetailsaccounttarget) GetSourceName() string`

GetSourceName returns the SourceName field if non-nil, zero value otherwise.

### GetSourceNameOk

`func (o *Identityentitlementdetailsaccounttarget) GetSourceNameOk() (*string, bool)`

GetSourceNameOk returns a tuple with the SourceName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceName

`func (o *Identityentitlementdetailsaccounttarget) SetSourceName(v string)`

SetSourceName sets SourceName field to given value.

### HasSourceName

`func (o *Identityentitlementdetailsaccounttarget) HasSourceName() bool`

HasSourceName returns a boolean if a field has been set.

### GetRemoveDate

`func (o *Identityentitlementdetailsaccounttarget) GetRemoveDate() string`

GetRemoveDate returns the RemoveDate field if non-nil, zero value otherwise.

### GetRemoveDateOk

`func (o *Identityentitlementdetailsaccounttarget) GetRemoveDateOk() (*string, bool)`

GetRemoveDateOk returns a tuple with the RemoveDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRemoveDate

`func (o *Identityentitlementdetailsaccounttarget) SetRemoveDate(v string)`

SetRemoveDate sets RemoveDate field to given value.

### HasRemoveDate

`func (o *Identityentitlementdetailsaccounttarget) HasRemoveDate() bool`

HasRemoveDate returns a boolean if a field has been set.

### SetRemoveDateNil

`func (o *Identityentitlementdetailsaccounttarget) SetRemoveDateNil(b bool)`

 SetRemoveDateNil sets the value for RemoveDate to be an explicit nil

### UnsetRemoveDate
`func (o *Identityentitlementdetailsaccounttarget) UnsetRemoveDate()`

UnsetRemoveDate ensures that no value is present for RemoveDate, not even an explicit nil
### GetAssignmentId

`func (o *Identityentitlementdetailsaccounttarget) GetAssignmentId() string`

GetAssignmentId returns the AssignmentId field if non-nil, zero value otherwise.

### GetAssignmentIdOk

`func (o *Identityentitlementdetailsaccounttarget) GetAssignmentIdOk() (*string, bool)`

GetAssignmentIdOk returns a tuple with the AssignmentId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAssignmentId

`func (o *Identityentitlementdetailsaccounttarget) SetAssignmentId(v string)`

SetAssignmentId sets AssignmentId field to given value.

### HasAssignmentId

`func (o *Identityentitlementdetailsaccounttarget) HasAssignmentId() bool`

HasAssignmentId returns a boolean if a field has been set.

### SetAssignmentIdNil

`func (o *Identityentitlementdetailsaccounttarget) SetAssignmentIdNil(b bool)`

 SetAssignmentIdNil sets the value for AssignmentId to be an explicit nil

### UnsetAssignmentId
`func (o *Identityentitlementdetailsaccounttarget) UnsetAssignmentId()`

UnsetAssignmentId ensures that no value is present for AssignmentId, not even an explicit nil
### GetRevocable

`func (o *Identityentitlementdetailsaccounttarget) GetRevocable() bool`

GetRevocable returns the Revocable field if non-nil, zero value otherwise.

### GetRevocableOk

`func (o *Identityentitlementdetailsaccounttarget) GetRevocableOk() (*bool, bool)`

GetRevocableOk returns a tuple with the Revocable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevocable

`func (o *Identityentitlementdetailsaccounttarget) SetRevocable(v bool)`

SetRevocable sets Revocable field to given value.

### HasRevocable

`func (o *Identityentitlementdetailsaccounttarget) HasRevocable() bool`

HasRevocable returns a boolean if a field has been set.


