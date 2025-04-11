---
id: beta-account-activity-item
title: AccountActivityItem
pagination_label: AccountActivityItem
sidebar_label: AccountActivityItem
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccountActivityItem', 'BetaAccountActivityItem'] 
slug: /tools/sdk/go/beta/models/account-activity-item
tags: ['SDK', 'Software Development Kit', 'AccountActivityItem', 'BetaAccountActivityItem']
---

# AccountActivityItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | Item id | [optional] 
**Name** | Pointer to **string** | Human-readable display name of item | [optional] 
**Requested** | Pointer to **time.Time** | Date and time item was requested | [optional] 
**ApprovalStatus** | Pointer to [**NullableAccountActivityApprovalStatus**](account-activity-approval-status) |  | [optional] 
**ProvisioningStatus** | Pointer to [**ProvisioningState**](provisioning-state) |  | [optional] 
**RequesterComment** | Pointer to [**NullableComment**](comment) |  | [optional] 
**ReviewerIdentitySummary** | Pointer to [**NullableIdentitySummary**](identity-summary) |  | [optional] 
**ReviewerComment** | Pointer to [**NullableComment**](comment) |  | [optional] 
**Operation** | Pointer to [**NullableAccountActivityItemOperation**](account-activity-item-operation) |  | [optional] 
**Attribute** | Pointer to **NullableString** | Attribute to which account activity applies | [optional] 
**Value** | Pointer to **NullableString** | Value of attribute | [optional] 
**NativeIdentity** | Pointer to **NullableString** | Native identity in the target system to which the account activity applies | [optional] 
**SourceId** | Pointer to **string** | Id of Source to which account activity applies | [optional] 
**AccountRequestInfo** | Pointer to [**NullableAccountRequestInfo**](account-request-info) |  | [optional] 
**ClientMetadata** | Pointer to **map[string]string** | Arbitrary key-value pairs, if any were included in the corresponding access request item | [optional] 
**RemoveDate** | Pointer to **NullableTime** | The date the role or access profile or entitlement is no longer assigned to the specified identity. | [optional] 

## Methods

### NewAccountActivityItem

`func NewAccountActivityItem() *AccountActivityItem`

NewAccountActivityItem instantiates a new AccountActivityItem object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccountActivityItemWithDefaults

`func NewAccountActivityItemWithDefaults() *AccountActivityItem`

NewAccountActivityItemWithDefaults instantiates a new AccountActivityItem object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *AccountActivityItem) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *AccountActivityItem) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *AccountActivityItem) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *AccountActivityItem) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *AccountActivityItem) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *AccountActivityItem) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *AccountActivityItem) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *AccountActivityItem) HasName() bool`

HasName returns a boolean if a field has been set.

### GetRequested

`func (o *AccountActivityItem) GetRequested() time.Time`

GetRequested returns the Requested field if non-nil, zero value otherwise.

### GetRequestedOk

`func (o *AccountActivityItem) GetRequestedOk() (*time.Time, bool)`

GetRequestedOk returns a tuple with the Requested field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequested

`func (o *AccountActivityItem) SetRequested(v time.Time)`

SetRequested sets Requested field to given value.

### HasRequested

`func (o *AccountActivityItem) HasRequested() bool`

HasRequested returns a boolean if a field has been set.

### GetApprovalStatus

`func (o *AccountActivityItem) GetApprovalStatus() AccountActivityApprovalStatus`

GetApprovalStatus returns the ApprovalStatus field if non-nil, zero value otherwise.

### GetApprovalStatusOk

`func (o *AccountActivityItem) GetApprovalStatusOk() (*AccountActivityApprovalStatus, bool)`

GetApprovalStatusOk returns a tuple with the ApprovalStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalStatus

`func (o *AccountActivityItem) SetApprovalStatus(v AccountActivityApprovalStatus)`

SetApprovalStatus sets ApprovalStatus field to given value.

### HasApprovalStatus

`func (o *AccountActivityItem) HasApprovalStatus() bool`

HasApprovalStatus returns a boolean if a field has been set.

### SetApprovalStatusNil

`func (o *AccountActivityItem) SetApprovalStatusNil(b bool)`

 SetApprovalStatusNil sets the value for ApprovalStatus to be an explicit nil

### UnsetApprovalStatus
`func (o *AccountActivityItem) UnsetApprovalStatus()`

UnsetApprovalStatus ensures that no value is present for ApprovalStatus, not even an explicit nil
### GetProvisioningStatus

`func (o *AccountActivityItem) GetProvisioningStatus() ProvisioningState`

GetProvisioningStatus returns the ProvisioningStatus field if non-nil, zero value otherwise.

### GetProvisioningStatusOk

`func (o *AccountActivityItem) GetProvisioningStatusOk() (*ProvisioningState, bool)`

GetProvisioningStatusOk returns a tuple with the ProvisioningStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProvisioningStatus

`func (o *AccountActivityItem) SetProvisioningStatus(v ProvisioningState)`

SetProvisioningStatus sets ProvisioningStatus field to given value.

### HasProvisioningStatus

`func (o *AccountActivityItem) HasProvisioningStatus() bool`

HasProvisioningStatus returns a boolean if a field has been set.

### GetRequesterComment

`func (o *AccountActivityItem) GetRequesterComment() Comment`

GetRequesterComment returns the RequesterComment field if non-nil, zero value otherwise.

### GetRequesterCommentOk

`func (o *AccountActivityItem) GetRequesterCommentOk() (*Comment, bool)`

GetRequesterCommentOk returns a tuple with the RequesterComment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequesterComment

`func (o *AccountActivityItem) SetRequesterComment(v Comment)`

SetRequesterComment sets RequesterComment field to given value.

### HasRequesterComment

`func (o *AccountActivityItem) HasRequesterComment() bool`

HasRequesterComment returns a boolean if a field has been set.

### SetRequesterCommentNil

`func (o *AccountActivityItem) SetRequesterCommentNil(b bool)`

 SetRequesterCommentNil sets the value for RequesterComment to be an explicit nil

### UnsetRequesterComment
`func (o *AccountActivityItem) UnsetRequesterComment()`

UnsetRequesterComment ensures that no value is present for RequesterComment, not even an explicit nil
### GetReviewerIdentitySummary

`func (o *AccountActivityItem) GetReviewerIdentitySummary() IdentitySummary`

GetReviewerIdentitySummary returns the ReviewerIdentitySummary field if non-nil, zero value otherwise.

### GetReviewerIdentitySummaryOk

`func (o *AccountActivityItem) GetReviewerIdentitySummaryOk() (*IdentitySummary, bool)`

GetReviewerIdentitySummaryOk returns a tuple with the ReviewerIdentitySummary field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReviewerIdentitySummary

`func (o *AccountActivityItem) SetReviewerIdentitySummary(v IdentitySummary)`

SetReviewerIdentitySummary sets ReviewerIdentitySummary field to given value.

### HasReviewerIdentitySummary

`func (o *AccountActivityItem) HasReviewerIdentitySummary() bool`

HasReviewerIdentitySummary returns a boolean if a field has been set.

### SetReviewerIdentitySummaryNil

`func (o *AccountActivityItem) SetReviewerIdentitySummaryNil(b bool)`

 SetReviewerIdentitySummaryNil sets the value for ReviewerIdentitySummary to be an explicit nil

### UnsetReviewerIdentitySummary
`func (o *AccountActivityItem) UnsetReviewerIdentitySummary()`

UnsetReviewerIdentitySummary ensures that no value is present for ReviewerIdentitySummary, not even an explicit nil
### GetReviewerComment

`func (o *AccountActivityItem) GetReviewerComment() Comment`

GetReviewerComment returns the ReviewerComment field if non-nil, zero value otherwise.

### GetReviewerCommentOk

`func (o *AccountActivityItem) GetReviewerCommentOk() (*Comment, bool)`

GetReviewerCommentOk returns a tuple with the ReviewerComment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReviewerComment

`func (o *AccountActivityItem) SetReviewerComment(v Comment)`

SetReviewerComment sets ReviewerComment field to given value.

### HasReviewerComment

`func (o *AccountActivityItem) HasReviewerComment() bool`

HasReviewerComment returns a boolean if a field has been set.

### SetReviewerCommentNil

`func (o *AccountActivityItem) SetReviewerCommentNil(b bool)`

 SetReviewerCommentNil sets the value for ReviewerComment to be an explicit nil

### UnsetReviewerComment
`func (o *AccountActivityItem) UnsetReviewerComment()`

UnsetReviewerComment ensures that no value is present for ReviewerComment, not even an explicit nil
### GetOperation

`func (o *AccountActivityItem) GetOperation() AccountActivityItemOperation`

GetOperation returns the Operation field if non-nil, zero value otherwise.

### GetOperationOk

`func (o *AccountActivityItem) GetOperationOk() (*AccountActivityItemOperation, bool)`

GetOperationOk returns a tuple with the Operation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOperation

`func (o *AccountActivityItem) SetOperation(v AccountActivityItemOperation)`

SetOperation sets Operation field to given value.

### HasOperation

`func (o *AccountActivityItem) HasOperation() bool`

HasOperation returns a boolean if a field has been set.

### SetOperationNil

`func (o *AccountActivityItem) SetOperationNil(b bool)`

 SetOperationNil sets the value for Operation to be an explicit nil

### UnsetOperation
`func (o *AccountActivityItem) UnsetOperation()`

UnsetOperation ensures that no value is present for Operation, not even an explicit nil
### GetAttribute

`func (o *AccountActivityItem) GetAttribute() string`

GetAttribute returns the Attribute field if non-nil, zero value otherwise.

### GetAttributeOk

`func (o *AccountActivityItem) GetAttributeOk() (*string, bool)`

GetAttributeOk returns a tuple with the Attribute field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttribute

`func (o *AccountActivityItem) SetAttribute(v string)`

SetAttribute sets Attribute field to given value.

### HasAttribute

`func (o *AccountActivityItem) HasAttribute() bool`

HasAttribute returns a boolean if a field has been set.

### SetAttributeNil

`func (o *AccountActivityItem) SetAttributeNil(b bool)`

 SetAttributeNil sets the value for Attribute to be an explicit nil

### UnsetAttribute
`func (o *AccountActivityItem) UnsetAttribute()`

UnsetAttribute ensures that no value is present for Attribute, not even an explicit nil
### GetValue

`func (o *AccountActivityItem) GetValue() string`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *AccountActivityItem) GetValueOk() (*string, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *AccountActivityItem) SetValue(v string)`

SetValue sets Value field to given value.

### HasValue

`func (o *AccountActivityItem) HasValue() bool`

HasValue returns a boolean if a field has been set.

### SetValueNil

`func (o *AccountActivityItem) SetValueNil(b bool)`

 SetValueNil sets the value for Value to be an explicit nil

### UnsetValue
`func (o *AccountActivityItem) UnsetValue()`

UnsetValue ensures that no value is present for Value, not even an explicit nil
### GetNativeIdentity

`func (o *AccountActivityItem) GetNativeIdentity() string`

GetNativeIdentity returns the NativeIdentity field if non-nil, zero value otherwise.

### GetNativeIdentityOk

`func (o *AccountActivityItem) GetNativeIdentityOk() (*string, bool)`

GetNativeIdentityOk returns a tuple with the NativeIdentity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNativeIdentity

`func (o *AccountActivityItem) SetNativeIdentity(v string)`

SetNativeIdentity sets NativeIdentity field to given value.

### HasNativeIdentity

`func (o *AccountActivityItem) HasNativeIdentity() bool`

HasNativeIdentity returns a boolean if a field has been set.

### SetNativeIdentityNil

`func (o *AccountActivityItem) SetNativeIdentityNil(b bool)`

 SetNativeIdentityNil sets the value for NativeIdentity to be an explicit nil

### UnsetNativeIdentity
`func (o *AccountActivityItem) UnsetNativeIdentity()`

UnsetNativeIdentity ensures that no value is present for NativeIdentity, not even an explicit nil
### GetSourceId

`func (o *AccountActivityItem) GetSourceId() string`

GetSourceId returns the SourceId field if non-nil, zero value otherwise.

### GetSourceIdOk

`func (o *AccountActivityItem) GetSourceIdOk() (*string, bool)`

GetSourceIdOk returns a tuple with the SourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceId

`func (o *AccountActivityItem) SetSourceId(v string)`

SetSourceId sets SourceId field to given value.

### HasSourceId

`func (o *AccountActivityItem) HasSourceId() bool`

HasSourceId returns a boolean if a field has been set.

### GetAccountRequestInfo

`func (o *AccountActivityItem) GetAccountRequestInfo() AccountRequestInfo`

GetAccountRequestInfo returns the AccountRequestInfo field if non-nil, zero value otherwise.

### GetAccountRequestInfoOk

`func (o *AccountActivityItem) GetAccountRequestInfoOk() (*AccountRequestInfo, bool)`

GetAccountRequestInfoOk returns a tuple with the AccountRequestInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountRequestInfo

`func (o *AccountActivityItem) SetAccountRequestInfo(v AccountRequestInfo)`

SetAccountRequestInfo sets AccountRequestInfo field to given value.

### HasAccountRequestInfo

`func (o *AccountActivityItem) HasAccountRequestInfo() bool`

HasAccountRequestInfo returns a boolean if a field has been set.

### SetAccountRequestInfoNil

`func (o *AccountActivityItem) SetAccountRequestInfoNil(b bool)`

 SetAccountRequestInfoNil sets the value for AccountRequestInfo to be an explicit nil

### UnsetAccountRequestInfo
`func (o *AccountActivityItem) UnsetAccountRequestInfo()`

UnsetAccountRequestInfo ensures that no value is present for AccountRequestInfo, not even an explicit nil
### GetClientMetadata

`func (o *AccountActivityItem) GetClientMetadata() map[string]string`

GetClientMetadata returns the ClientMetadata field if non-nil, zero value otherwise.

### GetClientMetadataOk

`func (o *AccountActivityItem) GetClientMetadataOk() (*map[string]string, bool)`

GetClientMetadataOk returns a tuple with the ClientMetadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClientMetadata

`func (o *AccountActivityItem) SetClientMetadata(v map[string]string)`

SetClientMetadata sets ClientMetadata field to given value.

### HasClientMetadata

`func (o *AccountActivityItem) HasClientMetadata() bool`

HasClientMetadata returns a boolean if a field has been set.

### SetClientMetadataNil

`func (o *AccountActivityItem) SetClientMetadataNil(b bool)`

 SetClientMetadataNil sets the value for ClientMetadata to be an explicit nil

### UnsetClientMetadata
`func (o *AccountActivityItem) UnsetClientMetadata()`

UnsetClientMetadata ensures that no value is present for ClientMetadata, not even an explicit nil
### GetRemoveDate

`func (o *AccountActivityItem) GetRemoveDate() time.Time`

GetRemoveDate returns the RemoveDate field if non-nil, zero value otherwise.

### GetRemoveDateOk

`func (o *AccountActivityItem) GetRemoveDateOk() (*time.Time, bool)`

GetRemoveDateOk returns a tuple with the RemoveDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRemoveDate

`func (o *AccountActivityItem) SetRemoveDate(v time.Time)`

SetRemoveDate sets RemoveDate field to given value.

### HasRemoveDate

`func (o *AccountActivityItem) HasRemoveDate() bool`

HasRemoveDate returns a boolean if a field has been set.

### SetRemoveDateNil

`func (o *AccountActivityItem) SetRemoveDateNil(b bool)`

 SetRemoveDateNil sets the value for RemoveDate to be an explicit nil

### UnsetRemoveDate
`func (o *AccountActivityItem) UnsetRemoveDate()`

UnsetRemoveDate ensures that no value is present for RemoveDate, not even an explicit nil

