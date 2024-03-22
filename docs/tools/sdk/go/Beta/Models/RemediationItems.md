---
id: remediation-items
title: RemediationItems
pagination_label: RemediationItems
sidebar_label: RemediationItems
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'RemediationItems'] 
slug: /tools/sdk/go/beta/models/remediation-items
tags: ['SDK', 'Software Development Kit', 'RemediationItems']
---

# RemediationItems

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **string** | The ID of the certification | [optional] 
**TargetId** |  Pointer to **string** | The ID of the certification target | [optional] 
**TargetName** |  Pointer to **string** | The name of the certification target | [optional] 
**TargetDisplayName** |  Pointer to **string** | The display name of the certification target | [optional] 
**ApplicationName** |  Pointer to **string** | The name of the application/source | [optional] 
**AttributeName** |  Pointer to **string** | The name of the attribute being certified | [optional] 
**AttributeOperation** |  Pointer to **string** | The operation of the certification on the attribute | [optional] 
**AttributeValue** |  Pointer to **string** | The value of the attribute being certified | [optional] 
**NativeIdentity** |  Pointer to **string** | The native identity of the target | [optional] 

## Methods

### NewRemediationItems

`func NewRemediationItems() *RemediationItems`

NewRemediationItems instantiates a new RemediationItems object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRemediationItemsWithDefaults

`func NewRemediationItemsWithDefaults() *RemediationItems`

NewRemediationItemsWithDefaults instantiates a new RemediationItems object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *RemediationItems) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *RemediationItems) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *RemediationItems) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *RemediationItems) HasId() bool`

HasId returns a boolean if a field has been set.

### GetTargetId

`func (o *RemediationItems) GetTargetId() string`

GetTargetId returns the TargetId field if non-nil, zero value otherwise.

### GetTargetIdOk

`func (o *RemediationItems) GetTargetIdOk() (*string, bool)`

GetTargetIdOk returns a tuple with the TargetId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetId

`func (o *RemediationItems) SetTargetId(v string)`

SetTargetId sets TargetId field to given value.

### HasTargetId

`func (o *RemediationItems) HasTargetId() bool`

HasTargetId returns a boolean if a field has been set.

### GetTargetName

`func (o *RemediationItems) GetTargetName() string`

GetTargetName returns the TargetName field if non-nil, zero value otherwise.

### GetTargetNameOk

`func (o *RemediationItems) GetTargetNameOk() (*string, bool)`

GetTargetNameOk returns a tuple with the TargetName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetName

`func (o *RemediationItems) SetTargetName(v string)`

SetTargetName sets TargetName field to given value.

### HasTargetName

`func (o *RemediationItems) HasTargetName() bool`

HasTargetName returns a boolean if a field has been set.

### GetTargetDisplayName

`func (o *RemediationItems) GetTargetDisplayName() string`

GetTargetDisplayName returns the TargetDisplayName field if non-nil, zero value otherwise.

### GetTargetDisplayNameOk

`func (o *RemediationItems) GetTargetDisplayNameOk() (*string, bool)`

GetTargetDisplayNameOk returns a tuple with the TargetDisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetDisplayName

`func (o *RemediationItems) SetTargetDisplayName(v string)`

SetTargetDisplayName sets TargetDisplayName field to given value.

### HasTargetDisplayName

`func (o *RemediationItems) HasTargetDisplayName() bool`

HasTargetDisplayName returns a boolean if a field has been set.

### GetApplicationName

`func (o *RemediationItems) GetApplicationName() string`

GetApplicationName returns the ApplicationName field if non-nil, zero value otherwise.

### GetApplicationNameOk

`func (o *RemediationItems) GetApplicationNameOk() (*string, bool)`

GetApplicationNameOk returns a tuple with the ApplicationName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApplicationName

`func (o *RemediationItems) SetApplicationName(v string)`

SetApplicationName sets ApplicationName field to given value.

### HasApplicationName

`func (o *RemediationItems) HasApplicationName() bool`

HasApplicationName returns a boolean if a field has been set.

### GetAttributeName

`func (o *RemediationItems) GetAttributeName() string`

GetAttributeName returns the AttributeName field if non-nil, zero value otherwise.

### GetAttributeNameOk

`func (o *RemediationItems) GetAttributeNameOk() (*string, bool)`

GetAttributeNameOk returns a tuple with the AttributeName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributeName

`func (o *RemediationItems) SetAttributeName(v string)`

SetAttributeName sets AttributeName field to given value.

### HasAttributeName

`func (o *RemediationItems) HasAttributeName() bool`

HasAttributeName returns a boolean if a field has been set.

### GetAttributeOperation

`func (o *RemediationItems) GetAttributeOperation() string`

GetAttributeOperation returns the AttributeOperation field if non-nil, zero value otherwise.

### GetAttributeOperationOk

`func (o *RemediationItems) GetAttributeOperationOk() (*string, bool)`

GetAttributeOperationOk returns a tuple with the AttributeOperation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributeOperation

`func (o *RemediationItems) SetAttributeOperation(v string)`

SetAttributeOperation sets AttributeOperation field to given value.

### HasAttributeOperation

`func (o *RemediationItems) HasAttributeOperation() bool`

HasAttributeOperation returns a boolean if a field has been set.

### GetAttributeValue

`func (o *RemediationItems) GetAttributeValue() string`

GetAttributeValue returns the AttributeValue field if non-nil, zero value otherwise.

### GetAttributeValueOk

`func (o *RemediationItems) GetAttributeValueOk() (*string, bool)`

GetAttributeValueOk returns a tuple with the AttributeValue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributeValue

`func (o *RemediationItems) SetAttributeValue(v string)`

SetAttributeValue sets AttributeValue field to given value.

### HasAttributeValue

`func (o *RemediationItems) HasAttributeValue() bool`

HasAttributeValue returns a boolean if a field has been set.

### GetNativeIdentity

`func (o *RemediationItems) GetNativeIdentity() string`

GetNativeIdentity returns the NativeIdentity field if non-nil, zero value otherwise.

### GetNativeIdentityOk

`func (o *RemediationItems) GetNativeIdentityOk() (*string, bool)`

GetNativeIdentityOk returns a tuple with the NativeIdentity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNativeIdentity

`func (o *RemediationItems) SetNativeIdentity(v string)`

SetNativeIdentity sets NativeIdentity field to given value.

### HasNativeIdentity

`func (o *RemediationItems) HasNativeIdentity() bool`

HasNativeIdentity returns a boolean if a field has been set.


[[Back to top]](#) 


