---
id: v1-accountactivity
title: Accountactivity
pagination_label: Accountactivity
sidebar_label: Accountactivity
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Accountactivity', 'V1Accountactivity'] 
slug: /tools/sdk/go/accountactivities/models/accountactivity
tags: ['SDK', 'Software Development Kit', 'Accountactivity', 'V1Accountactivity']
---

# Accountactivity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | Id of the account activity | [optional] 
**Name** | Pointer to **string** | The name of the activity | [optional] 
**Created** | Pointer to **SailPointTime** | When the activity was first created | [optional] 
**Modified** | Pointer to **NullableTime** | When the activity was last modified | [optional] 
**Completed** | Pointer to **NullableTime** | When the activity was completed | [optional] 
**CompletionStatus** | Pointer to [**NullableCompletionstatus**](completionstatus) |  | [optional] 
**Type** | Pointer to **NullableString** | The type of action the activity performed.  Please see the following list of types.  This list may grow over time.  - CloudAutomated - IdentityAttributeUpdate - appRequest - LifecycleStateChange - AccountStateUpdate - AccountAttributeUpdate - CloudPasswordRequest - Attribute Synchronization Refresh - Certification - Identity Refresh - Lifecycle Change Refresh   [Learn more here](https://documentation.sailpoint.com/saas/help/search/searchable-fields.html#searching-account-activity-data).  | [optional] 
**RequesterIdentitySummary** | Pointer to [**NullableIdentitysummary**](identitysummary) |  | [optional] 
**TargetIdentitySummary** | Pointer to [**NullableIdentitysummary**](identitysummary) |  | [optional] 
**Errors** | Pointer to **[]string** | A list of error messages, if any, that were encountered. | [optional] 
**Warnings** | Pointer to **[]string** | A list of warning messages, if any, that were encountered. | [optional] 
**Items** | Pointer to [**[]Accountactivityitem**](accountactivityitem) | Individual actions performed as part of this account activity | [optional] 
**ExecutionStatus** | Pointer to [**Executionstatus**](executionstatus) |  | [optional] 
**ClientMetadata** | Pointer to **map[string]string** | Arbitrary key-value pairs, if any were included in the corresponding access request | [optional] 

## Methods

### NewAccountactivity

`func NewAccountactivity() *Accountactivity`

NewAccountactivity instantiates a new Accountactivity object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccountactivityWithDefaults

`func NewAccountactivityWithDefaults() *Accountactivity`

NewAccountactivityWithDefaults instantiates a new Accountactivity object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Accountactivity) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Accountactivity) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Accountactivity) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Accountactivity) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *Accountactivity) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Accountactivity) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Accountactivity) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Accountactivity) HasName() bool`

HasName returns a boolean if a field has been set.

### GetCreated

`func (o *Accountactivity) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *Accountactivity) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *Accountactivity) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *Accountactivity) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *Accountactivity) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *Accountactivity) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *Accountactivity) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *Accountactivity) HasModified() bool`

HasModified returns a boolean if a field has been set.

### SetModifiedNil

`func (o *Accountactivity) SetModifiedNil(b bool)`

 SetModifiedNil sets the value for Modified to be an explicit nil

### UnsetModified
`func (o *Accountactivity) UnsetModified()`

UnsetModified ensures that no value is present for Modified, not even an explicit nil
### GetCompleted

`func (o *Accountactivity) GetCompleted() SailPointTime`

GetCompleted returns the Completed field if non-nil, zero value otherwise.

### GetCompletedOk

`func (o *Accountactivity) GetCompletedOk() (*SailPointTime, bool)`

GetCompletedOk returns a tuple with the Completed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompleted

`func (o *Accountactivity) SetCompleted(v SailPointTime)`

SetCompleted sets Completed field to given value.

### HasCompleted

`func (o *Accountactivity) HasCompleted() bool`

HasCompleted returns a boolean if a field has been set.

### SetCompletedNil

`func (o *Accountactivity) SetCompletedNil(b bool)`

 SetCompletedNil sets the value for Completed to be an explicit nil

### UnsetCompleted
`func (o *Accountactivity) UnsetCompleted()`

UnsetCompleted ensures that no value is present for Completed, not even an explicit nil
### GetCompletionStatus

`func (o *Accountactivity) GetCompletionStatus() Completionstatus`

GetCompletionStatus returns the CompletionStatus field if non-nil, zero value otherwise.

### GetCompletionStatusOk

`func (o *Accountactivity) GetCompletionStatusOk() (*Completionstatus, bool)`

GetCompletionStatusOk returns a tuple with the CompletionStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompletionStatus

`func (o *Accountactivity) SetCompletionStatus(v Completionstatus)`

SetCompletionStatus sets CompletionStatus field to given value.

### HasCompletionStatus

`func (o *Accountactivity) HasCompletionStatus() bool`

HasCompletionStatus returns a boolean if a field has been set.

### SetCompletionStatusNil

`func (o *Accountactivity) SetCompletionStatusNil(b bool)`

 SetCompletionStatusNil sets the value for CompletionStatus to be an explicit nil

### UnsetCompletionStatus
`func (o *Accountactivity) UnsetCompletionStatus()`

UnsetCompletionStatus ensures that no value is present for CompletionStatus, not even an explicit nil
### GetType

`func (o *Accountactivity) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Accountactivity) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Accountactivity) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *Accountactivity) HasType() bool`

HasType returns a boolean if a field has been set.

### SetTypeNil

`func (o *Accountactivity) SetTypeNil(b bool)`

 SetTypeNil sets the value for Type to be an explicit nil

### UnsetType
`func (o *Accountactivity) UnsetType()`

UnsetType ensures that no value is present for Type, not even an explicit nil
### GetRequesterIdentitySummary

`func (o *Accountactivity) GetRequesterIdentitySummary() Identitysummary`

GetRequesterIdentitySummary returns the RequesterIdentitySummary field if non-nil, zero value otherwise.

### GetRequesterIdentitySummaryOk

`func (o *Accountactivity) GetRequesterIdentitySummaryOk() (*Identitysummary, bool)`

GetRequesterIdentitySummaryOk returns a tuple with the RequesterIdentitySummary field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequesterIdentitySummary

`func (o *Accountactivity) SetRequesterIdentitySummary(v Identitysummary)`

SetRequesterIdentitySummary sets RequesterIdentitySummary field to given value.

### HasRequesterIdentitySummary

`func (o *Accountactivity) HasRequesterIdentitySummary() bool`

HasRequesterIdentitySummary returns a boolean if a field has been set.

### SetRequesterIdentitySummaryNil

`func (o *Accountactivity) SetRequesterIdentitySummaryNil(b bool)`

 SetRequesterIdentitySummaryNil sets the value for RequesterIdentitySummary to be an explicit nil

### UnsetRequesterIdentitySummary
`func (o *Accountactivity) UnsetRequesterIdentitySummary()`

UnsetRequesterIdentitySummary ensures that no value is present for RequesterIdentitySummary, not even an explicit nil
### GetTargetIdentitySummary

`func (o *Accountactivity) GetTargetIdentitySummary() Identitysummary`

GetTargetIdentitySummary returns the TargetIdentitySummary field if non-nil, zero value otherwise.

### GetTargetIdentitySummaryOk

`func (o *Accountactivity) GetTargetIdentitySummaryOk() (*Identitysummary, bool)`

GetTargetIdentitySummaryOk returns a tuple with the TargetIdentitySummary field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetIdentitySummary

`func (o *Accountactivity) SetTargetIdentitySummary(v Identitysummary)`

SetTargetIdentitySummary sets TargetIdentitySummary field to given value.

### HasTargetIdentitySummary

`func (o *Accountactivity) HasTargetIdentitySummary() bool`

HasTargetIdentitySummary returns a boolean if a field has been set.

### SetTargetIdentitySummaryNil

`func (o *Accountactivity) SetTargetIdentitySummaryNil(b bool)`

 SetTargetIdentitySummaryNil sets the value for TargetIdentitySummary to be an explicit nil

### UnsetTargetIdentitySummary
`func (o *Accountactivity) UnsetTargetIdentitySummary()`

UnsetTargetIdentitySummary ensures that no value is present for TargetIdentitySummary, not even an explicit nil
### GetErrors

`func (o *Accountactivity) GetErrors() []string`

GetErrors returns the Errors field if non-nil, zero value otherwise.

### GetErrorsOk

`func (o *Accountactivity) GetErrorsOk() (*[]string, bool)`

GetErrorsOk returns a tuple with the Errors field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrors

`func (o *Accountactivity) SetErrors(v []string)`

SetErrors sets Errors field to given value.

### HasErrors

`func (o *Accountactivity) HasErrors() bool`

HasErrors returns a boolean if a field has been set.

### SetErrorsNil

`func (o *Accountactivity) SetErrorsNil(b bool)`

 SetErrorsNil sets the value for Errors to be an explicit nil

### UnsetErrors
`func (o *Accountactivity) UnsetErrors()`

UnsetErrors ensures that no value is present for Errors, not even an explicit nil
### GetWarnings

`func (o *Accountactivity) GetWarnings() []string`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *Accountactivity) GetWarningsOk() (*[]string, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *Accountactivity) SetWarnings(v []string)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *Accountactivity) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.

### SetWarningsNil

`func (o *Accountactivity) SetWarningsNil(b bool)`

 SetWarningsNil sets the value for Warnings to be an explicit nil

### UnsetWarnings
`func (o *Accountactivity) UnsetWarnings()`

UnsetWarnings ensures that no value is present for Warnings, not even an explicit nil
### GetItems

`func (o *Accountactivity) GetItems() []Accountactivityitem`

GetItems returns the Items field if non-nil, zero value otherwise.

### GetItemsOk

`func (o *Accountactivity) GetItemsOk() (*[]Accountactivityitem, bool)`

GetItemsOk returns a tuple with the Items field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItems

`func (o *Accountactivity) SetItems(v []Accountactivityitem)`

SetItems sets Items field to given value.

### HasItems

`func (o *Accountactivity) HasItems() bool`

HasItems returns a boolean if a field has been set.

### SetItemsNil

`func (o *Accountactivity) SetItemsNil(b bool)`

 SetItemsNil sets the value for Items to be an explicit nil

### UnsetItems
`func (o *Accountactivity) UnsetItems()`

UnsetItems ensures that no value is present for Items, not even an explicit nil
### GetExecutionStatus

`func (o *Accountactivity) GetExecutionStatus() Executionstatus`

GetExecutionStatus returns the ExecutionStatus field if non-nil, zero value otherwise.

### GetExecutionStatusOk

`func (o *Accountactivity) GetExecutionStatusOk() (*Executionstatus, bool)`

GetExecutionStatusOk returns a tuple with the ExecutionStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExecutionStatus

`func (o *Accountactivity) SetExecutionStatus(v Executionstatus)`

SetExecutionStatus sets ExecutionStatus field to given value.

### HasExecutionStatus

`func (o *Accountactivity) HasExecutionStatus() bool`

HasExecutionStatus returns a boolean if a field has been set.

### GetClientMetadata

`func (o *Accountactivity) GetClientMetadata() map[string]string`

GetClientMetadata returns the ClientMetadata field if non-nil, zero value otherwise.

### GetClientMetadataOk

`func (o *Accountactivity) GetClientMetadataOk() (*map[string]string, bool)`

GetClientMetadataOk returns a tuple with the ClientMetadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClientMetadata

`func (o *Accountactivity) SetClientMetadata(v map[string]string)`

SetClientMetadata sets ClientMetadata field to given value.

### HasClientMetadata

`func (o *Accountactivity) HasClientMetadata() bool`

HasClientMetadata returns a boolean if a field has been set.

### SetClientMetadataNil

`func (o *Accountactivity) SetClientMetadataNil(b bool)`

 SetClientMetadataNil sets the value for ClientMetadata to be an explicit nil

### UnsetClientMetadata
`func (o *Accountactivity) UnsetClientMetadata()`

UnsetClientMetadata ensures that no value is present for ClientMetadata, not even an explicit nil

