---
id: v1-workitems
title: Workitems
pagination_label: Workitems
sidebar_label: Workitems
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Workitems', 'V1Workitems'] 
slug: /tools/sdk/go/workitems/models/workitems
tags: ['SDK', 'Software Development Kit', 'Workitems', 'V1Workitems']
---

# Workitems

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | ID of the work item | [optional] 
**RequesterId** | Pointer to **NullableString** | ID of the requester | [optional] 
**RequesterDisplayName** | Pointer to **NullableString** | The displayname of the requester | [optional] 
**OwnerId** | Pointer to **NullableString** | The ID of the owner | [optional] 
**OwnerName** | Pointer to **string** | The name of the owner | [optional] 
**Created** | Pointer to **SailPointTime** | Time when the work item was created | [optional] 
**Modified** | Pointer to **NullableTime** | Time when the work item was last updated | [optional] 
**Description** | Pointer to **string** | The description of the work item | [optional] 
**State** | Pointer to [**Workitemstatemanualworkitems**](workitemstatemanualworkitems) |  | [optional] 
**Type** | Pointer to [**Workitemtypemanualworkitems**](workitemtypemanualworkitems) |  | [optional] 
**RemediationItems** | Pointer to [**[]Remediationitemdetails**](remediationitemdetails) | A list of remediation items | [optional] 
**ApprovalItems** | Pointer to [**[]Approvalitemdetails**](approvalitemdetails) | A list of items that need to be approved | [optional] 
**Name** | Pointer to **NullableString** | The work item name | [optional] 
**Completed** | Pointer to **NullableTime** | The time at which the work item completed | [optional] 
**NumItems** | Pointer to **NullableInt32** | The number of items in the work item | [optional] 
**Form** | Pointer to [**WorkitemsForm**](workitems-form) |  | [optional] 
**Errors** | Pointer to **[]string** | An array of errors that ocurred during the work item | [optional] 

## Methods

### NewWorkitems

`func NewWorkitems() *Workitems`

NewWorkitems instantiates a new Workitems object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewWorkitemsWithDefaults

`func NewWorkitemsWithDefaults() *Workitems`

NewWorkitemsWithDefaults instantiates a new Workitems object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Workitems) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Workitems) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Workitems) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Workitems) HasId() bool`

HasId returns a boolean if a field has been set.

### GetRequesterId

`func (o *Workitems) GetRequesterId() string`

GetRequesterId returns the RequesterId field if non-nil, zero value otherwise.

### GetRequesterIdOk

`func (o *Workitems) GetRequesterIdOk() (*string, bool)`

GetRequesterIdOk returns a tuple with the RequesterId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequesterId

`func (o *Workitems) SetRequesterId(v string)`

SetRequesterId sets RequesterId field to given value.

### HasRequesterId

`func (o *Workitems) HasRequesterId() bool`

HasRequesterId returns a boolean if a field has been set.

### SetRequesterIdNil

`func (o *Workitems) SetRequesterIdNil(b bool)`

 SetRequesterIdNil sets the value for RequesterId to be an explicit nil

### UnsetRequesterId
`func (o *Workitems) UnsetRequesterId()`

UnsetRequesterId ensures that no value is present for RequesterId, not even an explicit nil
### GetRequesterDisplayName

`func (o *Workitems) GetRequesterDisplayName() string`

GetRequesterDisplayName returns the RequesterDisplayName field if non-nil, zero value otherwise.

### GetRequesterDisplayNameOk

`func (o *Workitems) GetRequesterDisplayNameOk() (*string, bool)`

GetRequesterDisplayNameOk returns a tuple with the RequesterDisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequesterDisplayName

`func (o *Workitems) SetRequesterDisplayName(v string)`

SetRequesterDisplayName sets RequesterDisplayName field to given value.

### HasRequesterDisplayName

`func (o *Workitems) HasRequesterDisplayName() bool`

HasRequesterDisplayName returns a boolean if a field has been set.

### SetRequesterDisplayNameNil

`func (o *Workitems) SetRequesterDisplayNameNil(b bool)`

 SetRequesterDisplayNameNil sets the value for RequesterDisplayName to be an explicit nil

### UnsetRequesterDisplayName
`func (o *Workitems) UnsetRequesterDisplayName()`

UnsetRequesterDisplayName ensures that no value is present for RequesterDisplayName, not even an explicit nil
### GetOwnerId

`func (o *Workitems) GetOwnerId() string`

GetOwnerId returns the OwnerId field if non-nil, zero value otherwise.

### GetOwnerIdOk

`func (o *Workitems) GetOwnerIdOk() (*string, bool)`

GetOwnerIdOk returns a tuple with the OwnerId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwnerId

`func (o *Workitems) SetOwnerId(v string)`

SetOwnerId sets OwnerId field to given value.

### HasOwnerId

`func (o *Workitems) HasOwnerId() bool`

HasOwnerId returns a boolean if a field has been set.

### SetOwnerIdNil

`func (o *Workitems) SetOwnerIdNil(b bool)`

 SetOwnerIdNil sets the value for OwnerId to be an explicit nil

### UnsetOwnerId
`func (o *Workitems) UnsetOwnerId()`

UnsetOwnerId ensures that no value is present for OwnerId, not even an explicit nil
### GetOwnerName

`func (o *Workitems) GetOwnerName() string`

GetOwnerName returns the OwnerName field if non-nil, zero value otherwise.

### GetOwnerNameOk

`func (o *Workitems) GetOwnerNameOk() (*string, bool)`

GetOwnerNameOk returns a tuple with the OwnerName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwnerName

`func (o *Workitems) SetOwnerName(v string)`

SetOwnerName sets OwnerName field to given value.

### HasOwnerName

`func (o *Workitems) HasOwnerName() bool`

HasOwnerName returns a boolean if a field has been set.

### GetCreated

`func (o *Workitems) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *Workitems) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *Workitems) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *Workitems) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *Workitems) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *Workitems) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *Workitems) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *Workitems) HasModified() bool`

HasModified returns a boolean if a field has been set.

### SetModifiedNil

`func (o *Workitems) SetModifiedNil(b bool)`

 SetModifiedNil sets the value for Modified to be an explicit nil

### UnsetModified
`func (o *Workitems) UnsetModified()`

UnsetModified ensures that no value is present for Modified, not even an explicit nil
### GetDescription

`func (o *Workitems) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Workitems) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Workitems) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Workitems) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetState

`func (o *Workitems) GetState() Workitemstatemanualworkitems`

GetState returns the State field if non-nil, zero value otherwise.

### GetStateOk

`func (o *Workitems) GetStateOk() (*Workitemstatemanualworkitems, bool)`

GetStateOk returns a tuple with the State field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetState

`func (o *Workitems) SetState(v Workitemstatemanualworkitems)`

SetState sets State field to given value.

### HasState

`func (o *Workitems) HasState() bool`

HasState returns a boolean if a field has been set.

### GetType

`func (o *Workitems) GetType() Workitemtypemanualworkitems`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Workitems) GetTypeOk() (*Workitemtypemanualworkitems, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Workitems) SetType(v Workitemtypemanualworkitems)`

SetType sets Type field to given value.

### HasType

`func (o *Workitems) HasType() bool`

HasType returns a boolean if a field has been set.

### GetRemediationItems

`func (o *Workitems) GetRemediationItems() []Remediationitemdetails`

GetRemediationItems returns the RemediationItems field if non-nil, zero value otherwise.

### GetRemediationItemsOk

`func (o *Workitems) GetRemediationItemsOk() (*[]Remediationitemdetails, bool)`

GetRemediationItemsOk returns a tuple with the RemediationItems field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRemediationItems

`func (o *Workitems) SetRemediationItems(v []Remediationitemdetails)`

SetRemediationItems sets RemediationItems field to given value.

### HasRemediationItems

`func (o *Workitems) HasRemediationItems() bool`

HasRemediationItems returns a boolean if a field has been set.

### SetRemediationItemsNil

`func (o *Workitems) SetRemediationItemsNil(b bool)`

 SetRemediationItemsNil sets the value for RemediationItems to be an explicit nil

### UnsetRemediationItems
`func (o *Workitems) UnsetRemediationItems()`

UnsetRemediationItems ensures that no value is present for RemediationItems, not even an explicit nil
### GetApprovalItems

`func (o *Workitems) GetApprovalItems() []Approvalitemdetails`

GetApprovalItems returns the ApprovalItems field if non-nil, zero value otherwise.

### GetApprovalItemsOk

`func (o *Workitems) GetApprovalItemsOk() (*[]Approvalitemdetails, bool)`

GetApprovalItemsOk returns a tuple with the ApprovalItems field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalItems

`func (o *Workitems) SetApprovalItems(v []Approvalitemdetails)`

SetApprovalItems sets ApprovalItems field to given value.

### HasApprovalItems

`func (o *Workitems) HasApprovalItems() bool`

HasApprovalItems returns a boolean if a field has been set.

### SetApprovalItemsNil

`func (o *Workitems) SetApprovalItemsNil(b bool)`

 SetApprovalItemsNil sets the value for ApprovalItems to be an explicit nil

### UnsetApprovalItems
`func (o *Workitems) UnsetApprovalItems()`

UnsetApprovalItems ensures that no value is present for ApprovalItems, not even an explicit nil
### GetName

`func (o *Workitems) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Workitems) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Workitems) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Workitems) HasName() bool`

HasName returns a boolean if a field has been set.

### SetNameNil

`func (o *Workitems) SetNameNil(b bool)`

 SetNameNil sets the value for Name to be an explicit nil

### UnsetName
`func (o *Workitems) UnsetName()`

UnsetName ensures that no value is present for Name, not even an explicit nil
### GetCompleted

`func (o *Workitems) GetCompleted() SailPointTime`

GetCompleted returns the Completed field if non-nil, zero value otherwise.

### GetCompletedOk

`func (o *Workitems) GetCompletedOk() (*SailPointTime, bool)`

GetCompletedOk returns a tuple with the Completed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompleted

`func (o *Workitems) SetCompleted(v SailPointTime)`

SetCompleted sets Completed field to given value.

### HasCompleted

`func (o *Workitems) HasCompleted() bool`

HasCompleted returns a boolean if a field has been set.

### SetCompletedNil

`func (o *Workitems) SetCompletedNil(b bool)`

 SetCompletedNil sets the value for Completed to be an explicit nil

### UnsetCompleted
`func (o *Workitems) UnsetCompleted()`

UnsetCompleted ensures that no value is present for Completed, not even an explicit nil
### GetNumItems

`func (o *Workitems) GetNumItems() int32`

GetNumItems returns the NumItems field if non-nil, zero value otherwise.

### GetNumItemsOk

`func (o *Workitems) GetNumItemsOk() (*int32, bool)`

GetNumItemsOk returns a tuple with the NumItems field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNumItems

`func (o *Workitems) SetNumItems(v int32)`

SetNumItems sets NumItems field to given value.

### HasNumItems

`func (o *Workitems) HasNumItems() bool`

HasNumItems returns a boolean if a field has been set.

### SetNumItemsNil

`func (o *Workitems) SetNumItemsNil(b bool)`

 SetNumItemsNil sets the value for NumItems to be an explicit nil

### UnsetNumItems
`func (o *Workitems) UnsetNumItems()`

UnsetNumItems ensures that no value is present for NumItems, not even an explicit nil
### GetForm

`func (o *Workitems) GetForm() WorkitemsForm`

GetForm returns the Form field if non-nil, zero value otherwise.

### GetFormOk

`func (o *Workitems) GetFormOk() (*WorkitemsForm, bool)`

GetFormOk returns a tuple with the Form field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetForm

`func (o *Workitems) SetForm(v WorkitemsForm)`

SetForm sets Form field to given value.

### HasForm

`func (o *Workitems) HasForm() bool`

HasForm returns a boolean if a field has been set.

### GetErrors

`func (o *Workitems) GetErrors() []string`

GetErrors returns the Errors field if non-nil, zero value otherwise.

### GetErrorsOk

`func (o *Workitems) GetErrorsOk() (*[]string, bool)`

GetErrorsOk returns a tuple with the Errors field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrors

`func (o *Workitems) SetErrors(v []string)`

SetErrors sets Errors field to given value.

### HasErrors

`func (o *Workitems) HasErrors() bool`

HasErrors returns a boolean if a field has been set.


