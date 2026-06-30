---
id: v1-dependantappconnections-account-source
title: DependantappconnectionsAccountSource
pagination_label: DependantappconnectionsAccountSource
sidebar_label: DependantappconnectionsAccountSource
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'DependantappconnectionsAccountSource', 'V1DependantappconnectionsAccountSource'] 
slug: /tools/sdk/go/sources/models/dependantappconnections-account-source
tags: ['SDK', 'Software Development Kit', 'DependantappconnectionsAccountSource', 'V1DependantappconnectionsAccountSource']
---

# DependantappconnectionsAccountSource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**UseForPasswordManagement** | Pointer to **bool** | Use this Account Source for password management | [optional] [default to false]
**PasswordPolicies** | Pointer to [**[]DependantappconnectionsAccountSourcePasswordPoliciesInner**](dependantappconnections-account-source-password-policies-inner) | A list of Password Policies for this Account Source | [optional] 

## Methods

### NewDependantappconnectionsAccountSource

`func NewDependantappconnectionsAccountSource() *DependantappconnectionsAccountSource`

NewDependantappconnectionsAccountSource instantiates a new DependantappconnectionsAccountSource object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDependantappconnectionsAccountSourceWithDefaults

`func NewDependantappconnectionsAccountSourceWithDefaults() *DependantappconnectionsAccountSource`

NewDependantappconnectionsAccountSourceWithDefaults instantiates a new DependantappconnectionsAccountSource object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUseForPasswordManagement

`func (o *DependantappconnectionsAccountSource) GetUseForPasswordManagement() bool`

GetUseForPasswordManagement returns the UseForPasswordManagement field if non-nil, zero value otherwise.

### GetUseForPasswordManagementOk

`func (o *DependantappconnectionsAccountSource) GetUseForPasswordManagementOk() (*bool, bool)`

GetUseForPasswordManagementOk returns a tuple with the UseForPasswordManagement field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUseForPasswordManagement

`func (o *DependantappconnectionsAccountSource) SetUseForPasswordManagement(v bool)`

SetUseForPasswordManagement sets UseForPasswordManagement field to given value.

### HasUseForPasswordManagement

`func (o *DependantappconnectionsAccountSource) HasUseForPasswordManagement() bool`

HasUseForPasswordManagement returns a boolean if a field has been set.

### GetPasswordPolicies

`func (o *DependantappconnectionsAccountSource) GetPasswordPolicies() []DependantappconnectionsAccountSourcePasswordPoliciesInner`

GetPasswordPolicies returns the PasswordPolicies field if non-nil, zero value otherwise.

### GetPasswordPoliciesOk

`func (o *DependantappconnectionsAccountSource) GetPasswordPoliciesOk() (*[]DependantappconnectionsAccountSourcePasswordPoliciesInner, bool)`

GetPasswordPoliciesOk returns a tuple with the PasswordPolicies field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPasswordPolicies

`func (o *DependantappconnectionsAccountSource) SetPasswordPolicies(v []DependantappconnectionsAccountSourcePasswordPoliciesInner)`

SetPasswordPolicies sets PasswordPolicies field to given value.

### HasPasswordPolicies

`func (o *DependantappconnectionsAccountSource) HasPasswordPolicies() bool`

HasPasswordPolicies returns a boolean if a field has been set.


