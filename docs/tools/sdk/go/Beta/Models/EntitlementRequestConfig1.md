---
id: entitlement-request-config1
title: EntitlementRequestConfig1
pagination_label: EntitlementRequestConfig1
sidebar_label: EntitlementRequestConfig1
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'EntitlementRequestConfig1'] 
slug: /tools/sdk/go/beta/models/entitlement-request-config1
tags: ['SDK', 'Software Development Kit', 'EntitlementRequestConfig1']
---

# EntitlementRequestConfig1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AllowEntitlementRequest** |  Pointer to **bool** | Flag for allowing entitlement request. | [optional] 
**RequestCommentsRequired** |  Pointer to **bool** | Flag for requiring comments while submitting an entitlement request. | [optional] [default to false]
**DeniedCommentsRequired** |  Pointer to **bool** | Flag for requiring comments while rejecting an entitlement request. | [optional] [default to false]
**GrantRequestApprovalSchemes** |  Pointer to **NullableString** | Approval schemes for granting entitlement request. This can be empty if no approval is needed. Multiple schemes must be comma-separated. The valid schemes are \&quot;entitlementOwner\&quot;, \&quot;sourceOwner\&quot;, \&quot;manager\&quot; and \&quot;workgroup:{id}\&quot;. Multiple workgroups (governance groups) can be used.  | [optional] [default to "sourceOwner"]

## Methods

### NewEntitlementRequestConfig1

`func NewEntitlementRequestConfig1() *EntitlementRequestConfig1`

NewEntitlementRequestConfig1 instantiates a new EntitlementRequestConfig1 object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEntitlementRequestConfig1WithDefaults

`func NewEntitlementRequestConfig1WithDefaults() *EntitlementRequestConfig1`

NewEntitlementRequestConfig1WithDefaults instantiates a new EntitlementRequestConfig1 object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAllowEntitlementRequest

`func (o *EntitlementRequestConfig1) GetAllowEntitlementRequest() bool`

GetAllowEntitlementRequest returns the AllowEntitlementRequest field if non-nil, zero value otherwise.

### GetAllowEntitlementRequestOk

`func (o *EntitlementRequestConfig1) GetAllowEntitlementRequestOk() (*bool, bool)`

GetAllowEntitlementRequestOk returns a tuple with the AllowEntitlementRequest field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllowEntitlementRequest

`func (o *EntitlementRequestConfig1) SetAllowEntitlementRequest(v bool)`

SetAllowEntitlementRequest sets AllowEntitlementRequest field to given value.

### HasAllowEntitlementRequest

`func (o *EntitlementRequestConfig1) HasAllowEntitlementRequest() bool`

HasAllowEntitlementRequest returns a boolean if a field has been set.

### GetRequestCommentsRequired

`func (o *EntitlementRequestConfig1) GetRequestCommentsRequired() bool`

GetRequestCommentsRequired returns the RequestCommentsRequired field if non-nil, zero value otherwise.

### GetRequestCommentsRequiredOk

`func (o *EntitlementRequestConfig1) GetRequestCommentsRequiredOk() (*bool, bool)`

GetRequestCommentsRequiredOk returns a tuple with the RequestCommentsRequired field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestCommentsRequired

`func (o *EntitlementRequestConfig1) SetRequestCommentsRequired(v bool)`

SetRequestCommentsRequired sets RequestCommentsRequired field to given value.

### HasRequestCommentsRequired

`func (o *EntitlementRequestConfig1) HasRequestCommentsRequired() bool`

HasRequestCommentsRequired returns a boolean if a field has been set.

### GetDeniedCommentsRequired

`func (o *EntitlementRequestConfig1) GetDeniedCommentsRequired() bool`

GetDeniedCommentsRequired returns the DeniedCommentsRequired field if non-nil, zero value otherwise.

### GetDeniedCommentsRequiredOk

`func (o *EntitlementRequestConfig1) GetDeniedCommentsRequiredOk() (*bool, bool)`

GetDeniedCommentsRequiredOk returns a tuple with the DeniedCommentsRequired field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeniedCommentsRequired

`func (o *EntitlementRequestConfig1) SetDeniedCommentsRequired(v bool)`

SetDeniedCommentsRequired sets DeniedCommentsRequired field to given value.

### HasDeniedCommentsRequired

`func (o *EntitlementRequestConfig1) HasDeniedCommentsRequired() bool`

HasDeniedCommentsRequired returns a boolean if a field has been set.

### GetGrantRequestApprovalSchemes

`func (o *EntitlementRequestConfig1) GetGrantRequestApprovalSchemes() string`

GetGrantRequestApprovalSchemes returns the GrantRequestApprovalSchemes field if non-nil, zero value otherwise.

### GetGrantRequestApprovalSchemesOk

`func (o *EntitlementRequestConfig1) GetGrantRequestApprovalSchemesOk() (*string, bool)`

GetGrantRequestApprovalSchemesOk returns a tuple with the GrantRequestApprovalSchemes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGrantRequestApprovalSchemes

`func (o *EntitlementRequestConfig1) SetGrantRequestApprovalSchemes(v string)`

SetGrantRequestApprovalSchemes sets GrantRequestApprovalSchemes field to given value.

### HasGrantRequestApprovalSchemes

`func (o *EntitlementRequestConfig1) HasGrantRequestApprovalSchemes() bool`

HasGrantRequestApprovalSchemes returns a boolean if a field has been set.

### SetGrantRequestApprovalSchemesNil

`func (o *EntitlementRequestConfig1) SetGrantRequestApprovalSchemesNil(b bool)`

 SetGrantRequestApprovalSchemesNil sets the value for GrantRequestApprovalSchemes to be an explicit nil

### UnsetGrantRequestApprovalSchemes
`func (o *EntitlementRequestConfig1) UnsetGrantRequestApprovalSchemes()`

UnsetGrantRequestApprovalSchemes ensures that no value is present for GrantRequestApprovalSchemes, not even an explicit nil

[[Back to top]](#) 


