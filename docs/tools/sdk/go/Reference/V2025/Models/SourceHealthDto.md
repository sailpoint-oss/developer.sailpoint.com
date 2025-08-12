---
id: v2025-source-health-dto
title: SourceHealthDto
pagination_label: SourceHealthDto
sidebar_label: SourceHealthDto
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SourceHealthDto', 'V2025SourceHealthDto'] 
slug: /tools/sdk/go/v2025/models/source-health-dto
tags: ['SDK', 'Software Development Kit', 'SourceHealthDto', 'V2025SourceHealthDto']
---

# SourceHealthDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | the id of the Source | [optional] [readonly] 
**Type** | Pointer to **string** | Specifies the type of system being managed e.g. Active Directory, Workday, etc.. If you are creating a Delimited File source, you must set the `provisionasCsv` query parameter to `true`.  | [optional] 
**Name** | Pointer to **string** | the name of the source | [optional] 
**Org** | Pointer to **string** | source's org | [optional] 
**IsAuthoritative** | Pointer to **bool** | Is the source authoritative | [optional] 
**IsCluster** | Pointer to **bool** | Is the source in a cluster | [optional] 
**Hostname** | Pointer to **string** | source's hostname | [optional] 
**Pod** | Pointer to **string** | source's pod | [optional] 
**IqServiceVersion** | Pointer to **NullableString** | The version of the iqService | [optional] 
**Status** | Pointer to **string** | connection test result | [optional] 

## Methods

### NewSourceHealthDto

`func NewSourceHealthDto() *SourceHealthDto`

NewSourceHealthDto instantiates a new SourceHealthDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSourceHealthDtoWithDefaults

`func NewSourceHealthDtoWithDefaults() *SourceHealthDto`

NewSourceHealthDtoWithDefaults instantiates a new SourceHealthDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *SourceHealthDto) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *SourceHealthDto) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *SourceHealthDto) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *SourceHealthDto) HasId() bool`

HasId returns a boolean if a field has been set.

### GetType

`func (o *SourceHealthDto) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *SourceHealthDto) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *SourceHealthDto) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *SourceHealthDto) HasType() bool`

HasType returns a boolean if a field has been set.

### GetName

`func (o *SourceHealthDto) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *SourceHealthDto) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *SourceHealthDto) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *SourceHealthDto) HasName() bool`

HasName returns a boolean if a field has been set.

### GetOrg

`func (o *SourceHealthDto) GetOrg() string`

GetOrg returns the Org field if non-nil, zero value otherwise.

### GetOrgOk

`func (o *SourceHealthDto) GetOrgOk() (*string, bool)`

GetOrgOk returns a tuple with the Org field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrg

`func (o *SourceHealthDto) SetOrg(v string)`

SetOrg sets Org field to given value.

### HasOrg

`func (o *SourceHealthDto) HasOrg() bool`

HasOrg returns a boolean if a field has been set.

### GetIsAuthoritative

`func (o *SourceHealthDto) GetIsAuthoritative() bool`

GetIsAuthoritative returns the IsAuthoritative field if non-nil, zero value otherwise.

### GetIsAuthoritativeOk

`func (o *SourceHealthDto) GetIsAuthoritativeOk() (*bool, bool)`

GetIsAuthoritativeOk returns a tuple with the IsAuthoritative field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsAuthoritative

`func (o *SourceHealthDto) SetIsAuthoritative(v bool)`

SetIsAuthoritative sets IsAuthoritative field to given value.

### HasIsAuthoritative

`func (o *SourceHealthDto) HasIsAuthoritative() bool`

HasIsAuthoritative returns a boolean if a field has been set.

### GetIsCluster

`func (o *SourceHealthDto) GetIsCluster() bool`

GetIsCluster returns the IsCluster field if non-nil, zero value otherwise.

### GetIsClusterOk

`func (o *SourceHealthDto) GetIsClusterOk() (*bool, bool)`

GetIsClusterOk returns a tuple with the IsCluster field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsCluster

`func (o *SourceHealthDto) SetIsCluster(v bool)`

SetIsCluster sets IsCluster field to given value.

### HasIsCluster

`func (o *SourceHealthDto) HasIsCluster() bool`

HasIsCluster returns a boolean if a field has been set.

### GetHostname

`func (o *SourceHealthDto) GetHostname() string`

GetHostname returns the Hostname field if non-nil, zero value otherwise.

### GetHostnameOk

`func (o *SourceHealthDto) GetHostnameOk() (*string, bool)`

GetHostnameOk returns a tuple with the Hostname field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHostname

`func (o *SourceHealthDto) SetHostname(v string)`

SetHostname sets Hostname field to given value.

### HasHostname

`func (o *SourceHealthDto) HasHostname() bool`

HasHostname returns a boolean if a field has been set.

### GetPod

`func (o *SourceHealthDto) GetPod() string`

GetPod returns the Pod field if non-nil, zero value otherwise.

### GetPodOk

`func (o *SourceHealthDto) GetPodOk() (*string, bool)`

GetPodOk returns a tuple with the Pod field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPod

`func (o *SourceHealthDto) SetPod(v string)`

SetPod sets Pod field to given value.

### HasPod

`func (o *SourceHealthDto) HasPod() bool`

HasPod returns a boolean if a field has been set.

### GetIqServiceVersion

`func (o *SourceHealthDto) GetIqServiceVersion() string`

GetIqServiceVersion returns the IqServiceVersion field if non-nil, zero value otherwise.

### GetIqServiceVersionOk

`func (o *SourceHealthDto) GetIqServiceVersionOk() (*string, bool)`

GetIqServiceVersionOk returns a tuple with the IqServiceVersion field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIqServiceVersion

`func (o *SourceHealthDto) SetIqServiceVersion(v string)`

SetIqServiceVersion sets IqServiceVersion field to given value.

### HasIqServiceVersion

`func (o *SourceHealthDto) HasIqServiceVersion() bool`

HasIqServiceVersion returns a boolean if a field has been set.

### SetIqServiceVersionNil

`func (o *SourceHealthDto) SetIqServiceVersionNil(b bool)`

 SetIqServiceVersionNil sets the value for IqServiceVersion to be an explicit nil

### UnsetIqServiceVersion
`func (o *SourceHealthDto) UnsetIqServiceVersion()`

UnsetIqServiceVersion ensures that no value is present for IqServiceVersion, not even an explicit nil
### GetStatus

`func (o *SourceHealthDto) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *SourceHealthDto) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *SourceHealthDto) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *SourceHealthDto) HasStatus() bool`

HasStatus returns a boolean if a field has been set.


