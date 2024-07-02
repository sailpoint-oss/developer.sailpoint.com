---
id: account-action
title: AccountAction
pagination_label: AccountAction
sidebar_label: AccountAction
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'AccountAction'] 
slug: /tools/sdk/go/beta/models/account-action
tags: ['SDK', 'Software Development Kit', 'AccountAction']
---

# AccountAction

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Action** |  Pointer to **string** | Describes if action will be enabled or disabled | [optional] 
**SourceIds** |  Pointer to **[]string** | List of source IDs. The sources must have the ENABLE feature or flat file source. See \&quot;/sources\&quot; endpoint for source features. | [optional] 

## Methods

### NewAccountAction

`func NewAccountAction() *AccountAction`

NewAccountAction instantiates a new AccountAction object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccountActionWithDefaults

`func NewAccountActionWithDefaults() *AccountAction`

NewAccountActionWithDefaults instantiates a new AccountAction object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAction

`func (o *AccountAction) GetAction() string`

GetAction returns the Action field if non-nil, zero value otherwise.

### GetActionOk

`func (o *AccountAction) GetActionOk() (*string, bool)`

GetActionOk returns a tuple with the Action field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAction

`func (o *AccountAction) SetAction(v string)`

SetAction sets Action field to given value.

### HasAction

`func (o *AccountAction) HasAction() bool`

HasAction returns a boolean if a field has been set.

### GetSourceIds

`func (o *AccountAction) GetSourceIds() []string`

GetSourceIds returns the SourceIds field if non-nil, zero value otherwise.

### GetSourceIdsOk

`func (o *AccountAction) GetSourceIdsOk() (*[]string, bool)`

GetSourceIdsOk returns a tuple with the SourceIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceIds

`func (o *AccountAction) SetSourceIds(v []string)`

SetSourceIds sets SourceIds field to given value.

### HasSourceIds

`func (o *AccountAction) HasSourceIds() bool`

HasSourceIds returns a boolean if a field has been set.


[[Back to top]](#) 


