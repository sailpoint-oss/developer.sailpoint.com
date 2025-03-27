---
id: account-activity
title: AccountActivity
pagination_label: AccountActivity
sidebar_label: AccountActivity
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccountActivity', 'AccountActivity'] 
slug: /tools/sdk/go/v3/models/account-activity
tags: ['SDK', 'Software Development Kit', 'AccountActivity', 'AccountActivity']
---

# AccountActivity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | Id of the account activity | [optional] 
**Name** | Pointer to **string** | The name of the activity | [optional] 
**Created** | Pointer to **time.Time** | When the activity was first created | [optional] 
**Modified** | Pointer to **NullableTime** | When the activity was last modified | [optional] 
**Completed** | Pointer to **NullableTime** | When the activity was completed | [optional] 
**CompletionStatus** | Pointer to [**NullableCompletionStatus**](completion-status) |  | [optional] 
**Type** | Pointer to **NullableString** | The type of action the activity performed.  Please see the following list of types.  This list may grow over time.  - CloudAutomated - IdentityAttributeUpdate - appRequest - LifecycleStateChange - AccountStateUpdate - AccountAttributeUpdate - CloudPasswordRequest - Attribute Synchronization Refresh - Certification - Identity Refresh - Lifecycle Change Refresh   [Learn more here](https://documentation.sailpoint.com/saas/help/search/searchable-fields.html#searching-account-activity-data).  | [optional] 
**RequesterIdentitySummary** | Pointer to [**NullableIdentitySummary**](identity-summary) |  | [optional] 
**TargetIdentitySummary** | Pointer to [**NullableIdentitySummary**](identity-summary) |  | [optional] 
**Errors** | Pointer to **[]string** | A list of error messages, if any, that were encountered. | [optional] 
**Warnings** | Pointer to **[]string** | A list of warning messages, if any, that were encountered. | [optional] 
**Items** | Pointer to [**[]AccountActivityItem**](account-activity-item) | Individual actions performed as part of this account activity | [optional] 
**ExecutionStatus** | Pointer to [**ExecutionStatus**](execution-status) |  | [optional] 
**ClientMetadata** | Pointer to **map[string]string** | Arbitrary key-value pairs, if any were included in the corresponding access request | [optional] 

## Methods

### NewAccountActivity

`func NewAccountActivity() *AccountActivity`

NewAccountActivity instantiates a new AccountActivity object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccountActivityWithDefaults

`func NewAccountActivityWithDefaults() *AccountActivity`

NewAccountActivityWithDefaults instantiates a new AccountActivity object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *AccountActivity) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *AccountActivity) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *AccountActivity) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *AccountActivity) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *AccountActivity) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *AccountActivity) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *AccountActivity) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *AccountActivity) HasName() bool`

HasName returns a boolean if a field has been set.

### GetCreated

`func (o *AccountActivity) GetCreated() time.Time`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *AccountActivity) GetCreatedOk() (*time.Time, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *AccountActivity) SetCreated(v time.Time)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *AccountActivity) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *AccountActivity) GetModified() time.Time`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *AccountActivity) GetModifiedOk() (*time.Time, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *AccountActivity) SetModified(v time.Time)`

SetModified sets Modified field to given value.

### HasModified

`func (o *AccountActivity) HasModified() bool`

HasModified returns a boolean if a field has been set.

### SetModifiedNil

`func (o *AccountActivity) SetModifiedNil(b bool)`

 SetModifiedNil sets the value for Modified to be an explicit nil

### UnsetModified
`func (o *AccountActivity) UnsetModified()`

UnsetModified ensures that no value is present for Modified, not even an explicit nil
### GetCompleted

`func (o *AccountActivity) GetCompleted() time.Time`

GetCompleted returns the Completed field if non-nil, zero value otherwise.

### GetCompletedOk

`func (o *AccountActivity) GetCompletedOk() (*time.Time, bool)`

GetCompletedOk returns a tuple with the Completed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompleted

`func (o *AccountActivity) SetCompleted(v time.Time)`

SetCompleted sets Completed field to given value.

### HasCompleted

`func (o *AccountActivity) HasCompleted() bool`

HasCompleted returns a boolean if a field has been set.

### SetCompletedNil

`func (o *AccountActivity) SetCompletedNil(b bool)`

 SetCompletedNil sets the value for Completed to be an explicit nil

### UnsetCompleted
`func (o *AccountActivity) UnsetCompleted()`

UnsetCompleted ensures that no value is present for Completed, not even an explicit nil
### GetCompletionStatus

`func (o *AccountActivity) GetCompletionStatus() CompletionStatus`

GetCompletionStatus returns the CompletionStatus field if non-nil, zero value otherwise.

### GetCompletionStatusOk

`func (o *AccountActivity) GetCompletionStatusOk() (*CompletionStatus, bool)`

GetCompletionStatusOk returns a tuple with the CompletionStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompletionStatus

`func (o *AccountActivity) SetCompletionStatus(v CompletionStatus)`

SetCompletionStatus sets CompletionStatus field to given value.

### HasCompletionStatus

`func (o *AccountActivity) HasCompletionStatus() bool`

HasCompletionStatus returns a boolean if a field has been set.

### SetCompletionStatusNil

`func (o *AccountActivity) SetCompletionStatusNil(b bool)`

 SetCompletionStatusNil sets the value for CompletionStatus to be an explicit nil

### UnsetCompletionStatus
`func (o *AccountActivity) UnsetCompletionStatus()`

UnsetCompletionStatus ensures that no value is present for CompletionStatus, not even an explicit nil
### GetType

`func (o *AccountActivity) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *AccountActivity) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *AccountActivity) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *AccountActivity) HasType() bool`

HasType returns a boolean if a field has been set.

### SetTypeNil

`func (o *AccountActivity) SetTypeNil(b bool)`

 SetTypeNil sets the value for Type to be an explicit nil

### UnsetType
`func (o *AccountActivity) UnsetType()`

UnsetType ensures that no value is present for Type, not even an explicit nil
### GetRequesterIdentitySummary

`func (o *AccountActivity) GetRequesterIdentitySummary() IdentitySummary`

GetRequesterIdentitySummary returns the RequesterIdentitySummary field if non-nil, zero value otherwise.

### GetRequesterIdentitySummaryOk

`func (o *AccountActivity) GetRequesterIdentitySummaryOk() (*IdentitySummary, bool)`

GetRequesterIdentitySummaryOk returns a tuple with the RequesterIdentitySummary field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequesterIdentitySummary

`func (o *AccountActivity) SetRequesterIdentitySummary(v IdentitySummary)`

SetRequesterIdentitySummary sets RequesterIdentitySummary field to given value.

### HasRequesterIdentitySummary

`func (o *AccountActivity) HasRequesterIdentitySummary() bool`

HasRequesterIdentitySummary returns a boolean if a field has been set.

### SetRequesterIdentitySummaryNil

`func (o *AccountActivity) SetRequesterIdentitySummaryNil(b bool)`

 SetRequesterIdentitySummaryNil sets the value for RequesterIdentitySummary to be an explicit nil

### UnsetRequesterIdentitySummary
`func (o *AccountActivity) UnsetRequesterIdentitySummary()`

UnsetRequesterIdentitySummary ensures that no value is present for RequesterIdentitySummary, not even an explicit nil
### GetTargetIdentitySummary

`func (o *AccountActivity) GetTargetIdentitySummary() IdentitySummary`

GetTargetIdentitySummary returns the TargetIdentitySummary field if non-nil, zero value otherwise.

### GetTargetIdentitySummaryOk

`func (o *AccountActivity) GetTargetIdentitySummaryOk() (*IdentitySummary, bool)`

GetTargetIdentitySummaryOk returns a tuple with the TargetIdentitySummary field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetIdentitySummary

`func (o *AccountActivity) SetTargetIdentitySummary(v IdentitySummary)`

SetTargetIdentitySummary sets TargetIdentitySummary field to given value.

### HasTargetIdentitySummary

`func (o *AccountActivity) HasTargetIdentitySummary() bool`

HasTargetIdentitySummary returns a boolean if a field has been set.

### SetTargetIdentitySummaryNil

`func (o *AccountActivity) SetTargetIdentitySummaryNil(b bool)`

 SetTargetIdentitySummaryNil sets the value for TargetIdentitySummary to be an explicit nil

### UnsetTargetIdentitySummary
`func (o *AccountActivity) UnsetTargetIdentitySummary()`

UnsetTargetIdentitySummary ensures that no value is present for TargetIdentitySummary, not even an explicit nil
### GetErrors

`func (o *AccountActivity) GetErrors() []string`

GetErrors returns the Errors field if non-nil, zero value otherwise.

### GetErrorsOk

`func (o *AccountActivity) GetErrorsOk() (*[]string, bool)`

GetErrorsOk returns a tuple with the Errors field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrors

`func (o *AccountActivity) SetErrors(v []string)`

SetErrors sets Errors field to given value.

### HasErrors

`func (o *AccountActivity) HasErrors() bool`

HasErrors returns a boolean if a field has been set.

### SetErrorsNil

`func (o *AccountActivity) SetErrorsNil(b bool)`

 SetErrorsNil sets the value for Errors to be an explicit nil

### UnsetErrors
`func (o *AccountActivity) UnsetErrors()`

UnsetErrors ensures that no value is present for Errors, not even an explicit nil
### GetWarnings

`func (o *AccountActivity) GetWarnings() []string`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *AccountActivity) GetWarningsOk() (*[]string, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *AccountActivity) SetWarnings(v []string)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *AccountActivity) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.

### SetWarningsNil

`func (o *AccountActivity) SetWarningsNil(b bool)`

 SetWarningsNil sets the value for Warnings to be an explicit nil

### UnsetWarnings
`func (o *AccountActivity) UnsetWarnings()`

UnsetWarnings ensures that no value is present for Warnings, not even an explicit nil
### GetItems

`func (o *AccountActivity) GetItems() []AccountActivityItem`

GetItems returns the Items field if non-nil, zero value otherwise.

### GetItemsOk

`func (o *AccountActivity) GetItemsOk() (*[]AccountActivityItem, bool)`

GetItemsOk returns a tuple with the Items field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItems

`func (o *AccountActivity) SetItems(v []AccountActivityItem)`

SetItems sets Items field to given value.

### HasItems

`func (o *AccountActivity) HasItems() bool`

HasItems returns a boolean if a field has been set.

### SetItemsNil

`func (o *AccountActivity) SetItemsNil(b bool)`

 SetItemsNil sets the value for Items to be an explicit nil

### UnsetItems
`func (o *AccountActivity) UnsetItems()`

UnsetItems ensures that no value is present for Items, not even an explicit nil
### GetExecutionStatus

`func (o *AccountActivity) GetExecutionStatus() ExecutionStatus`

GetExecutionStatus returns the ExecutionStatus field if non-nil, zero value otherwise.

### GetExecutionStatusOk

`func (o *AccountActivity) GetExecutionStatusOk() (*ExecutionStatus, bool)`

GetExecutionStatusOk returns a tuple with the ExecutionStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExecutionStatus

`func (o *AccountActivity) SetExecutionStatus(v ExecutionStatus)`

SetExecutionStatus sets ExecutionStatus field to given value.

### HasExecutionStatus

`func (o *AccountActivity) HasExecutionStatus() bool`

HasExecutionStatus returns a boolean if a field has been set.

### GetClientMetadata

`func (o *AccountActivity) GetClientMetadata() map[string]string`

GetClientMetadata returns the ClientMetadata field if non-nil, zero value otherwise.

### GetClientMetadataOk

`func (o *AccountActivity) GetClientMetadataOk() (*map[string]string, bool)`

GetClientMetadataOk returns a tuple with the ClientMetadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClientMetadata

`func (o *AccountActivity) SetClientMetadata(v map[string]string)`

SetClientMetadata sets ClientMetadata field to given value.

### HasClientMetadata

`func (o *AccountActivity) HasClientMetadata() bool`

HasClientMetadata returns a boolean if a field has been set.

### SetClientMetadataNil

`func (o *AccountActivity) SetClientMetadataNil(b bool)`

 SetClientMetadataNil sets the value for ClientMetadata to be an explicit nil

### UnsetClientMetadata
`func (o *AccountActivity) UnsetClientMetadata()`

UnsetClientMetadata ensures that no value is present for ClientMetadata, not even an explicit nil

