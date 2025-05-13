---
id: v2025-remediation-item-details
title: RemediationItemDetails
pagination_label: RemediationItemDetails
sidebar_label: RemediationItemDetails
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'RemediationItemDetails', 'V2025RemediationItemDetails'] 
slug: /tools/sdk/go/v2025/models/remediation-item-details
tags: ['SDK', 'Software Development Kit', 'RemediationItemDetails', 'V2025RemediationItemDetails']
---

# RemediationItemDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | The ID of the certification | [optional] 
**TargetId** | Pointer to **string** | The ID of the certification target | [optional] 
**TargetName** | Pointer to **string** | The name of the certification target | [optional] 
**TargetDisplayName** | Pointer to **string** | The display name of the certification target | [optional] 
**ApplicationName** | Pointer to **string** | The name of the application/source | [optional] 
**AttributeName** | Pointer to **string** | The name of the attribute being certified | [optional] 
**AttributeOperation** | Pointer to **string** | The operation of the certification on the attribute | [optional] 
**AttributeValue** | Pointer to **string** | The value of the attribute being certified | [optional] 
**NativeIdentity** | Pointer to **string** | The native identity of the target | [optional] 

## Methods

### NewRemediationItemDetails

`func NewRemediationItemDetails() *RemediationItemDetails`

NewRemediationItemDetails instantiates a new RemediationItemDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRemediationItemDetailsWithDefaults

`func NewRemediationItemDetailsWithDefaults() *RemediationItemDetails`

NewRemediationItemDetailsWithDefaults instantiates a new RemediationItemDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *RemediationItemDetails) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *RemediationItemDetails) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *RemediationItemDetails) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *RemediationItemDetails) HasId() bool`

HasId returns a boolean if a field has been set.

### GetTargetId

`func (o *RemediationItemDetails) GetTargetId() string`

GetTargetId returns the TargetId field if non-nil, zero value otherwise.

### GetTargetIdOk

`func (o *RemediationItemDetails) GetTargetIdOk() (*string, bool)`

GetTargetIdOk returns a tuple with the TargetId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetId

`func (o *RemediationItemDetails) SetTargetId(v string)`

SetTargetId sets TargetId field to given value.

### HasTargetId

`func (o *RemediationItemDetails) HasTargetId() bool`

HasTargetId returns a boolean if a field has been set.

### GetTargetName

`func (o *RemediationItemDetails) GetTargetName() string`

GetTargetName returns the TargetName field if non-nil, zero value otherwise.

### GetTargetNameOk

`func (o *RemediationItemDetails) GetTargetNameOk() (*string, bool)`

GetTargetNameOk returns a tuple with the TargetName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetName

`func (o *RemediationItemDetails) SetTargetName(v string)`

SetTargetName sets TargetName field to given value.

### HasTargetName

`func (o *RemediationItemDetails) HasTargetName() bool`

HasTargetName returns a boolean if a field has been set.

### GetTargetDisplayName

`func (o *RemediationItemDetails) GetTargetDisplayName() string`

GetTargetDisplayName returns the TargetDisplayName field if non-nil, zero value otherwise.

### GetTargetDisplayNameOk

`func (o *RemediationItemDetails) GetTargetDisplayNameOk() (*string, bool)`

GetTargetDisplayNameOk returns a tuple with the TargetDisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetDisplayName

`func (o *RemediationItemDetails) SetTargetDisplayName(v string)`

SetTargetDisplayName sets TargetDisplayName field to given value.

### HasTargetDisplayName

`func (o *RemediationItemDetails) HasTargetDisplayName() bool`

HasTargetDisplayName returns a boolean if a field has been set.

### GetApplicationName

`func (o *RemediationItemDetails) GetApplicationName() string`

GetApplicationName returns the ApplicationName field if non-nil, zero value otherwise.

### GetApplicationNameOk

`func (o *RemediationItemDetails) GetApplicationNameOk() (*string, bool)`

GetApplicationNameOk returns a tuple with the ApplicationName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApplicationName

`func (o *RemediationItemDetails) SetApplicationName(v string)`

SetApplicationName sets ApplicationName field to given value.

### HasApplicationName

`func (o *RemediationItemDetails) HasApplicationName() bool`

HasApplicationName returns a boolean if a field has been set.

### GetAttributeName

`func (o *RemediationItemDetails) GetAttributeName() string`

GetAttributeName returns the AttributeName field if non-nil, zero value otherwise.

### GetAttributeNameOk

`func (o *RemediationItemDetails) GetAttributeNameOk() (*string, bool)`

GetAttributeNameOk returns a tuple with the AttributeName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributeName

`func (o *RemediationItemDetails) SetAttributeName(v string)`

SetAttributeName sets AttributeName field to given value.

### HasAttributeName

`func (o *RemediationItemDetails) HasAttributeName() bool`

HasAttributeName returns a boolean if a field has been set.

### GetAttributeOperation

`func (o *RemediationItemDetails) GetAttributeOperation() string`

GetAttributeOperation returns the AttributeOperation field if non-nil, zero value otherwise.

### GetAttributeOperationOk

`func (o *RemediationItemDetails) GetAttributeOperationOk() (*string, bool)`

GetAttributeOperationOk returns a tuple with the AttributeOperation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributeOperation

`func (o *RemediationItemDetails) SetAttributeOperation(v string)`

SetAttributeOperation sets AttributeOperation field to given value.

### HasAttributeOperation

`func (o *RemediationItemDetails) HasAttributeOperation() bool`

HasAttributeOperation returns a boolean if a field has been set.

### GetAttributeValue

`func (o *RemediationItemDetails) GetAttributeValue() string`

GetAttributeValue returns the AttributeValue field if non-nil, zero value otherwise.

### GetAttributeValueOk

`func (o *RemediationItemDetails) GetAttributeValueOk() (*string, bool)`

GetAttributeValueOk returns a tuple with the AttributeValue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributeValue

`func (o *RemediationItemDetails) SetAttributeValue(v string)`

SetAttributeValue sets AttributeValue field to given value.

### HasAttributeValue

`func (o *RemediationItemDetails) HasAttributeValue() bool`

HasAttributeValue returns a boolean if a field has been set.

### GetNativeIdentity

`func (o *RemediationItemDetails) GetNativeIdentity() string`

GetNativeIdentity returns the NativeIdentity field if non-nil, zero value otherwise.

### GetNativeIdentityOk

`func (o *RemediationItemDetails) GetNativeIdentityOk() (*string, bool)`

GetNativeIdentityOk returns a tuple with the NativeIdentity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNativeIdentity

`func (o *RemediationItemDetails) SetNativeIdentity(v string)`

SetNativeIdentity sets NativeIdentity field to given value.

### HasNativeIdentity

`func (o *RemediationItemDetails) HasNativeIdentity() bool`

HasNativeIdentity returns a boolean if a field has been set.


