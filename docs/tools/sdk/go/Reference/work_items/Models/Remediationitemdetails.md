---
id: v1-remediationitemdetails
title: Remediationitemdetails
pagination_label: Remediationitemdetails
sidebar_label: Remediationitemdetails
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Remediationitemdetails', 'V1Remediationitemdetails'] 
slug: /tools/sdk/go/workitems/models/remediationitemdetails
tags: ['SDK', 'Software Development Kit', 'Remediationitemdetails', 'V1Remediationitemdetails']
---

# Remediationitemdetails

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

### NewRemediationitemdetails

`func NewRemediationitemdetails() *Remediationitemdetails`

NewRemediationitemdetails instantiates a new Remediationitemdetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRemediationitemdetailsWithDefaults

`func NewRemediationitemdetailsWithDefaults() *Remediationitemdetails`

NewRemediationitemdetailsWithDefaults instantiates a new Remediationitemdetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Remediationitemdetails) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Remediationitemdetails) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Remediationitemdetails) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Remediationitemdetails) HasId() bool`

HasId returns a boolean if a field has been set.

### GetTargetId

`func (o *Remediationitemdetails) GetTargetId() string`

GetTargetId returns the TargetId field if non-nil, zero value otherwise.

### GetTargetIdOk

`func (o *Remediationitemdetails) GetTargetIdOk() (*string, bool)`

GetTargetIdOk returns a tuple with the TargetId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetId

`func (o *Remediationitemdetails) SetTargetId(v string)`

SetTargetId sets TargetId field to given value.

### HasTargetId

`func (o *Remediationitemdetails) HasTargetId() bool`

HasTargetId returns a boolean if a field has been set.

### GetTargetName

`func (o *Remediationitemdetails) GetTargetName() string`

GetTargetName returns the TargetName field if non-nil, zero value otherwise.

### GetTargetNameOk

`func (o *Remediationitemdetails) GetTargetNameOk() (*string, bool)`

GetTargetNameOk returns a tuple with the TargetName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetName

`func (o *Remediationitemdetails) SetTargetName(v string)`

SetTargetName sets TargetName field to given value.

### HasTargetName

`func (o *Remediationitemdetails) HasTargetName() bool`

HasTargetName returns a boolean if a field has been set.

### GetTargetDisplayName

`func (o *Remediationitemdetails) GetTargetDisplayName() string`

GetTargetDisplayName returns the TargetDisplayName field if non-nil, zero value otherwise.

### GetTargetDisplayNameOk

`func (o *Remediationitemdetails) GetTargetDisplayNameOk() (*string, bool)`

GetTargetDisplayNameOk returns a tuple with the TargetDisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetDisplayName

`func (o *Remediationitemdetails) SetTargetDisplayName(v string)`

SetTargetDisplayName sets TargetDisplayName field to given value.

### HasTargetDisplayName

`func (o *Remediationitemdetails) HasTargetDisplayName() bool`

HasTargetDisplayName returns a boolean if a field has been set.

### GetApplicationName

`func (o *Remediationitemdetails) GetApplicationName() string`

GetApplicationName returns the ApplicationName field if non-nil, zero value otherwise.

### GetApplicationNameOk

`func (o *Remediationitemdetails) GetApplicationNameOk() (*string, bool)`

GetApplicationNameOk returns a tuple with the ApplicationName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApplicationName

`func (o *Remediationitemdetails) SetApplicationName(v string)`

SetApplicationName sets ApplicationName field to given value.

### HasApplicationName

`func (o *Remediationitemdetails) HasApplicationName() bool`

HasApplicationName returns a boolean if a field has been set.

### GetAttributeName

`func (o *Remediationitemdetails) GetAttributeName() string`

GetAttributeName returns the AttributeName field if non-nil, zero value otherwise.

### GetAttributeNameOk

`func (o *Remediationitemdetails) GetAttributeNameOk() (*string, bool)`

GetAttributeNameOk returns a tuple with the AttributeName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributeName

`func (o *Remediationitemdetails) SetAttributeName(v string)`

SetAttributeName sets AttributeName field to given value.

### HasAttributeName

`func (o *Remediationitemdetails) HasAttributeName() bool`

HasAttributeName returns a boolean if a field has been set.

### GetAttributeOperation

`func (o *Remediationitemdetails) GetAttributeOperation() string`

GetAttributeOperation returns the AttributeOperation field if non-nil, zero value otherwise.

### GetAttributeOperationOk

`func (o *Remediationitemdetails) GetAttributeOperationOk() (*string, bool)`

GetAttributeOperationOk returns a tuple with the AttributeOperation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributeOperation

`func (o *Remediationitemdetails) SetAttributeOperation(v string)`

SetAttributeOperation sets AttributeOperation field to given value.

### HasAttributeOperation

`func (o *Remediationitemdetails) HasAttributeOperation() bool`

HasAttributeOperation returns a boolean if a field has been set.

### GetAttributeValue

`func (o *Remediationitemdetails) GetAttributeValue() string`

GetAttributeValue returns the AttributeValue field if non-nil, zero value otherwise.

### GetAttributeValueOk

`func (o *Remediationitemdetails) GetAttributeValueOk() (*string, bool)`

GetAttributeValueOk returns a tuple with the AttributeValue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributeValue

`func (o *Remediationitemdetails) SetAttributeValue(v string)`

SetAttributeValue sets AttributeValue field to given value.

### HasAttributeValue

`func (o *Remediationitemdetails) HasAttributeValue() bool`

HasAttributeValue returns a boolean if a field has been set.

### GetNativeIdentity

`func (o *Remediationitemdetails) GetNativeIdentity() string`

GetNativeIdentity returns the NativeIdentity field if non-nil, zero value otherwise.

### GetNativeIdentityOk

`func (o *Remediationitemdetails) GetNativeIdentityOk() (*string, bool)`

GetNativeIdentityOk returns a tuple with the NativeIdentity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNativeIdentity

`func (o *Remediationitemdetails) SetNativeIdentity(v string)`

SetNativeIdentity sets NativeIdentity field to given value.

### HasNativeIdentity

`func (o *Remediationitemdetails) HasNativeIdentity() bool`

HasNativeIdentity returns a boolean if a field has been set.


