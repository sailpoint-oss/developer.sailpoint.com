---
id: v2025-approval-requested-target
title: ApprovalRequestedTarget
pagination_label: ApprovalRequestedTarget
sidebar_label: ApprovalRequestedTarget
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ApprovalRequestedTarget', 'V2025ApprovalRequestedTarget'] 
slug: /tools/sdk/go/v2025/models/approval-requested-target
tags: ['SDK', 'Software Development Kit', 'ApprovalRequestedTarget', 'V2025ApprovalRequestedTarget']
---

# ApprovalRequestedTarget

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ForcedAuthSignature** | Pointer to **string** | Signature required for forced authentication. | [optional] 
**Id** | Pointer to **string** | ID of the requested target. | [optional] 
**Name** | Pointer to **string** | Name of the requested target. | [optional] 
**ReauthRequired** | Pointer to **bool** | Indicates if reauthentication is required. | [optional] [default to false]
**RemovalDate** | Pointer to **SailPointTime** | Date when the target will be removed. | [optional] 
**RequestType** | Pointer to **string** | Type of the request. | [optional] 
**TargetType** | Pointer to **string** | Type of the target. | [optional] 

## Methods

### NewApprovalRequestedTarget

`func NewApprovalRequestedTarget() *ApprovalRequestedTarget`

NewApprovalRequestedTarget instantiates a new ApprovalRequestedTarget object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApprovalRequestedTargetWithDefaults

`func NewApprovalRequestedTargetWithDefaults() *ApprovalRequestedTarget`

NewApprovalRequestedTargetWithDefaults instantiates a new ApprovalRequestedTarget object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetForcedAuthSignature

`func (o *ApprovalRequestedTarget) GetForcedAuthSignature() string`

GetForcedAuthSignature returns the ForcedAuthSignature field if non-nil, zero value otherwise.

### GetForcedAuthSignatureOk

`func (o *ApprovalRequestedTarget) GetForcedAuthSignatureOk() (*string, bool)`

GetForcedAuthSignatureOk returns a tuple with the ForcedAuthSignature field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetForcedAuthSignature

`func (o *ApprovalRequestedTarget) SetForcedAuthSignature(v string)`

SetForcedAuthSignature sets ForcedAuthSignature field to given value.

### HasForcedAuthSignature

`func (o *ApprovalRequestedTarget) HasForcedAuthSignature() bool`

HasForcedAuthSignature returns a boolean if a field has been set.

### GetId

`func (o *ApprovalRequestedTarget) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ApprovalRequestedTarget) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ApprovalRequestedTarget) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *ApprovalRequestedTarget) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *ApprovalRequestedTarget) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ApprovalRequestedTarget) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ApprovalRequestedTarget) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *ApprovalRequestedTarget) HasName() bool`

HasName returns a boolean if a field has been set.

### GetReauthRequired

`func (o *ApprovalRequestedTarget) GetReauthRequired() bool`

GetReauthRequired returns the ReauthRequired field if non-nil, zero value otherwise.

### GetReauthRequiredOk

`func (o *ApprovalRequestedTarget) GetReauthRequiredOk() (*bool, bool)`

GetReauthRequiredOk returns a tuple with the ReauthRequired field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReauthRequired

`func (o *ApprovalRequestedTarget) SetReauthRequired(v bool)`

SetReauthRequired sets ReauthRequired field to given value.

### HasReauthRequired

`func (o *ApprovalRequestedTarget) HasReauthRequired() bool`

HasReauthRequired returns a boolean if a field has been set.

### GetRemovalDate

`func (o *ApprovalRequestedTarget) GetRemovalDate() SailPointTime`

GetRemovalDate returns the RemovalDate field if non-nil, zero value otherwise.

### GetRemovalDateOk

`func (o *ApprovalRequestedTarget) GetRemovalDateOk() (*SailPointTime, bool)`

GetRemovalDateOk returns a tuple with the RemovalDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRemovalDate

`func (o *ApprovalRequestedTarget) SetRemovalDate(v SailPointTime)`

SetRemovalDate sets RemovalDate field to given value.

### HasRemovalDate

`func (o *ApprovalRequestedTarget) HasRemovalDate() bool`

HasRemovalDate returns a boolean if a field has been set.

### GetRequestType

`func (o *ApprovalRequestedTarget) GetRequestType() string`

GetRequestType returns the RequestType field if non-nil, zero value otherwise.

### GetRequestTypeOk

`func (o *ApprovalRequestedTarget) GetRequestTypeOk() (*string, bool)`

GetRequestTypeOk returns a tuple with the RequestType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestType

`func (o *ApprovalRequestedTarget) SetRequestType(v string)`

SetRequestType sets RequestType field to given value.

### HasRequestType

`func (o *ApprovalRequestedTarget) HasRequestType() bool`

HasRequestType returns a boolean if a field has been set.

### GetTargetType

`func (o *ApprovalRequestedTarget) GetTargetType() string`

GetTargetType returns the TargetType field if non-nil, zero value otherwise.

### GetTargetTypeOk

`func (o *ApprovalRequestedTarget) GetTargetTypeOk() (*string, bool)`

GetTargetTypeOk returns a tuple with the TargetType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetType

`func (o *ApprovalRequestedTarget) SetTargetType(v string)`

SetTargetType sets TargetType field to given value.

### HasTargetType

`func (o *ApprovalRequestedTarget) HasTargetType() bool`

HasTargetType returns a boolean if a field has been set.


