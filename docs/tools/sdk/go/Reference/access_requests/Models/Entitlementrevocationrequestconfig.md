---
id: v1-entitlementrevocationrequestconfig
title: Entitlementrevocationrequestconfig
pagination_label: Entitlementrevocationrequestconfig
sidebar_label: Entitlementrevocationrequestconfig
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Entitlementrevocationrequestconfig', 'V1Entitlementrevocationrequestconfig'] 
slug: /tools/sdk/go/accessrequests/models/entitlementrevocationrequestconfig
tags: ['SDK', 'Software Development Kit', 'Entitlementrevocationrequestconfig', 'V1Entitlementrevocationrequestconfig']
---

# Entitlementrevocationrequestconfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApprovalSchemes** | Pointer to [**[]Entitlementapprovalscheme**](entitlementapprovalscheme) | Ordered list of approval steps for the access request. Empty when no approval is required. | [optional] 

## Methods

### NewEntitlementrevocationrequestconfig

`func NewEntitlementrevocationrequestconfig() *Entitlementrevocationrequestconfig`

NewEntitlementrevocationrequestconfig instantiates a new Entitlementrevocationrequestconfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEntitlementrevocationrequestconfigWithDefaults

`func NewEntitlementrevocationrequestconfigWithDefaults() *Entitlementrevocationrequestconfig`

NewEntitlementrevocationrequestconfigWithDefaults instantiates a new Entitlementrevocationrequestconfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetApprovalSchemes

`func (o *Entitlementrevocationrequestconfig) GetApprovalSchemes() []Entitlementapprovalscheme`

GetApprovalSchemes returns the ApprovalSchemes field if non-nil, zero value otherwise.

### GetApprovalSchemesOk

`func (o *Entitlementrevocationrequestconfig) GetApprovalSchemesOk() (*[]Entitlementapprovalscheme, bool)`

GetApprovalSchemesOk returns a tuple with the ApprovalSchemes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalSchemes

`func (o *Entitlementrevocationrequestconfig) SetApprovalSchemes(v []Entitlementapprovalscheme)`

SetApprovalSchemes sets ApprovalSchemes field to given value.

### HasApprovalSchemes

`func (o *Entitlementrevocationrequestconfig) HasApprovalSchemes() bool`

HasApprovalSchemes returns a boolean if a field has been set.


