---
id: work-items
title: WorkItems
pagination_label: WorkItems
sidebar_label: WorkItems
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'WorkItems'] 
slug: /tools/sdk/go/beta/models/work-items
tags: ['SDK', 'Software Development Kit', 'WorkItems']
---

# WorkItems

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **string** | ID of the work item | [optional] 
**RequesterId** |  Pointer to **string** | ID of the requester | [optional] 
**RequesterDisplayName** |  Pointer to **string** | The displayname of the requester | [optional] 
**OwnerId** |  Pointer to **string** | The ID of the owner | [optional] 
**OwnerName** |  Pointer to **string** | The name of the owner | [optional] 
**Created** |  Pointer to **time.Time** |  | [optional] 
**Modified** |  Pointer to **time.Time** |  | [optional] 
**Description** |  Pointer to **string** | The description of the work item | [optional] 
**State** |  Pointer to [**WorkItemState**](work-item-state) |  | [optional] 
**Type** |  Pointer to [**WorkItemType**](work-item-type) |  | [optional] 
**RemediationItems** |  Pointer to [**RemediationItemDetails**](remediation-item-details) |  | [optional] 
**ApprovalItems** |  Pointer to [**ApprovalItemDetails**](approval-item-details) |  | [optional] 
**Name** |  Pointer to **string** | The work item name | [optional] 
**Completed** |  Pointer to **time.Time** |  | [optional] 
**NumItems** |  Pointer to **int32** | The number of items in the work item | [optional] 
**Errors** |  Pointer to **[]string** |  | [optional] 

## Methods

### NewWorkItems

`func NewWorkItems() *WorkItems`

NewWorkItems instantiates a new WorkItems object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewWorkItemsWithDefaults

`func NewWorkItemsWithDefaults() *WorkItems`

NewWorkItemsWithDefaults instantiates a new WorkItems object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *WorkItems) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *WorkItems) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *WorkItems) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *WorkItems) HasId() bool`

HasId returns a boolean if a field has been set.

### GetRequesterId

`func (o *WorkItems) GetRequesterId() string`

GetRequesterId returns the RequesterId field if non-nil, zero value otherwise.

### GetRequesterIdOk

`func (o *WorkItems) GetRequesterIdOk() (*string, bool)`

GetRequesterIdOk returns a tuple with the RequesterId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequesterId

`func (o *WorkItems) SetRequesterId(v string)`

SetRequesterId sets RequesterId field to given value.

### HasRequesterId

`func (o *WorkItems) HasRequesterId() bool`

HasRequesterId returns a boolean if a field has been set.

### GetRequesterDisplayName

`func (o *WorkItems) GetRequesterDisplayName() string`

GetRequesterDisplayName returns the RequesterDisplayName field if non-nil, zero value otherwise.

### GetRequesterDisplayNameOk

`func (o *WorkItems) GetRequesterDisplayNameOk() (*string, bool)`

GetRequesterDisplayNameOk returns a tuple with the RequesterDisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequesterDisplayName

`func (o *WorkItems) SetRequesterDisplayName(v string)`

SetRequesterDisplayName sets RequesterDisplayName field to given value.

### HasRequesterDisplayName

`func (o *WorkItems) HasRequesterDisplayName() bool`

HasRequesterDisplayName returns a boolean if a field has been set.

### GetOwnerId

`func (o *WorkItems) GetOwnerId() string`

GetOwnerId returns the OwnerId field if non-nil, zero value otherwise.

### GetOwnerIdOk

`func (o *WorkItems) GetOwnerIdOk() (*string, bool)`

GetOwnerIdOk returns a tuple with the OwnerId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwnerId

`func (o *WorkItems) SetOwnerId(v string)`

SetOwnerId sets OwnerId field to given value.

### HasOwnerId

`func (o *WorkItems) HasOwnerId() bool`

HasOwnerId returns a boolean if a field has been set.

### GetOwnerName

`func (o *WorkItems) GetOwnerName() string`

GetOwnerName returns the OwnerName field if non-nil, zero value otherwise.

### GetOwnerNameOk

`func (o *WorkItems) GetOwnerNameOk() (*string, bool)`

GetOwnerNameOk returns a tuple with the OwnerName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwnerName

`func (o *WorkItems) SetOwnerName(v string)`

SetOwnerName sets OwnerName field to given value.

### HasOwnerName

`func (o *WorkItems) HasOwnerName() bool`

HasOwnerName returns a boolean if a field has been set.

### GetCreated

`func (o *WorkItems) GetCreated() time.Time`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *WorkItems) GetCreatedOk() (*time.Time, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *WorkItems) SetCreated(v time.Time)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *WorkItems) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *WorkItems) GetModified() time.Time`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *WorkItems) GetModifiedOk() (*time.Time, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *WorkItems) SetModified(v time.Time)`

SetModified sets Modified field to given value.

### HasModified

`func (o *WorkItems) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetDescription

`func (o *WorkItems) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *WorkItems) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *WorkItems) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *WorkItems) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetState

`func (o *WorkItems) GetState() WorkItemState`

GetState returns the State field if non-nil, zero value otherwise.

### GetStateOk

`func (o *WorkItems) GetStateOk() (*WorkItemState, bool)`

GetStateOk returns a tuple with the State field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetState

`func (o *WorkItems) SetState(v WorkItemState)`

SetState sets State field to given value.

### HasState

`func (o *WorkItems) HasState() bool`

HasState returns a boolean if a field has been set.

### GetType

`func (o *WorkItems) GetType() WorkItemType`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *WorkItems) GetTypeOk() (*WorkItemType, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *WorkItems) SetType(v WorkItemType)`

SetType sets Type field to given value.

### HasType

`func (o *WorkItems) HasType() bool`

HasType returns a boolean if a field has been set.

### GetRemediationItems

`func (o *WorkItems) GetRemediationItems() RemediationItemDetails`

GetRemediationItems returns the RemediationItems field if non-nil, zero value otherwise.

### GetRemediationItemsOk

`func (o *WorkItems) GetRemediationItemsOk() (*RemediationItemDetails, bool)`

GetRemediationItemsOk returns a tuple with the RemediationItems field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRemediationItems

`func (o *WorkItems) SetRemediationItems(v RemediationItemDetails)`

SetRemediationItems sets RemediationItems field to given value.

### HasRemediationItems

`func (o *WorkItems) HasRemediationItems() bool`

HasRemediationItems returns a boolean if a field has been set.

### GetApprovalItems

`func (o *WorkItems) GetApprovalItems() ApprovalItemDetails`

GetApprovalItems returns the ApprovalItems field if non-nil, zero value otherwise.

### GetApprovalItemsOk

`func (o *WorkItems) GetApprovalItemsOk() (*ApprovalItemDetails, bool)`

GetApprovalItemsOk returns a tuple with the ApprovalItems field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalItems

`func (o *WorkItems) SetApprovalItems(v ApprovalItemDetails)`

SetApprovalItems sets ApprovalItems field to given value.

### HasApprovalItems

`func (o *WorkItems) HasApprovalItems() bool`

HasApprovalItems returns a boolean if a field has been set.

### GetName

`func (o *WorkItems) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *WorkItems) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *WorkItems) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *WorkItems) HasName() bool`

HasName returns a boolean if a field has been set.

### GetCompleted

`func (o *WorkItems) GetCompleted() time.Time`

GetCompleted returns the Completed field if non-nil, zero value otherwise.

### GetCompletedOk

`func (o *WorkItems) GetCompletedOk() (*time.Time, bool)`

GetCompletedOk returns a tuple with the Completed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompleted

`func (o *WorkItems) SetCompleted(v time.Time)`

SetCompleted sets Completed field to given value.

### HasCompleted

`func (o *WorkItems) HasCompleted() bool`

HasCompleted returns a boolean if a field has been set.

### GetNumItems

`func (o *WorkItems) GetNumItems() int32`

GetNumItems returns the NumItems field if non-nil, zero value otherwise.

### GetNumItemsOk

`func (o *WorkItems) GetNumItemsOk() (*int32, bool)`

GetNumItemsOk returns a tuple with the NumItems field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNumItems

`func (o *WorkItems) SetNumItems(v int32)`

SetNumItems sets NumItems field to given value.

### HasNumItems

`func (o *WorkItems) HasNumItems() bool`

HasNumItems returns a boolean if a field has been set.

### GetErrors

`func (o *WorkItems) GetErrors() []string`

GetErrors returns the Errors field if non-nil, zero value otherwise.

### GetErrorsOk

`func (o *WorkItems) GetErrorsOk() (*[]string, bool)`

GetErrorsOk returns a tuple with the Errors field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrors

`func (o *WorkItems) SetErrors(v []string)`

SetErrors sets Errors field to given value.

### HasErrors

`func (o *WorkItems) HasErrors() bool`

HasErrors returns a boolean if a field has been set.


[[Back to top]](#) 


