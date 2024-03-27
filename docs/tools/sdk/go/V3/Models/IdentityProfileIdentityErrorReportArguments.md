---
id: identity-profile-identity-error-report-arguments
title: IdentityProfileIdentityErrorReportArguments
pagination_label: IdentityProfileIdentityErrorReportArguments
sidebar_label: IdentityProfileIdentityErrorReportArguments
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'IdentityProfileIdentityErrorReportArguments'] 
slug: /tools/sdk/go/v3/models/identity-profile-identity-error-report-arguments
tags: ['SDK', 'Software Development Kit', 'IdentityProfileIdentityErrorReportArguments']
---

# IdentityProfileIdentityErrorReportArguments

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AuthoritativeSource** |  **string** | Source Id to be checked on errors of identity profiles aggregation | 
**DefaultS3Bucket** |  **bool** | Use it to set default s3 bucket where generated report will be saved.  In case this argument is false and &#39;s3Bucket&#39; argument is null or absent there will be default s3Bucket assigned to the report. | 
**S3Bucket** |  Pointer to **string** | If you want to be specific you could use this argument with defaultS3Bucket &#x3D; false. | [optional] 

## Methods

### NewIdentityProfileIdentityErrorReportArguments

`func NewIdentityProfileIdentityErrorReportArguments(authoritativeSource string, defaultS3Bucket bool, ) *IdentityProfileIdentityErrorReportArguments`

NewIdentityProfileIdentityErrorReportArguments instantiates a new IdentityProfileIdentityErrorReportArguments object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIdentityProfileIdentityErrorReportArgumentsWithDefaults

`func NewIdentityProfileIdentityErrorReportArgumentsWithDefaults() *IdentityProfileIdentityErrorReportArguments`

NewIdentityProfileIdentityErrorReportArgumentsWithDefaults instantiates a new IdentityProfileIdentityErrorReportArguments object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAuthoritativeSource

`func (o *IdentityProfileIdentityErrorReportArguments) GetAuthoritativeSource() string`

GetAuthoritativeSource returns the AuthoritativeSource field if non-nil, zero value otherwise.

### GetAuthoritativeSourceOk

`func (o *IdentityProfileIdentityErrorReportArguments) GetAuthoritativeSourceOk() (*string, bool)`

GetAuthoritativeSourceOk returns a tuple with the AuthoritativeSource field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthoritativeSource

`func (o *IdentityProfileIdentityErrorReportArguments) SetAuthoritativeSource(v string)`

SetAuthoritativeSource sets AuthoritativeSource field to given value.


### GetDefaultS3Bucket

`func (o *IdentityProfileIdentityErrorReportArguments) GetDefaultS3Bucket() bool`

GetDefaultS3Bucket returns the DefaultS3Bucket field if non-nil, zero value otherwise.

### GetDefaultS3BucketOk

`func (o *IdentityProfileIdentityErrorReportArguments) GetDefaultS3BucketOk() (*bool, bool)`

GetDefaultS3BucketOk returns a tuple with the DefaultS3Bucket field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDefaultS3Bucket

`func (o *IdentityProfileIdentityErrorReportArguments) SetDefaultS3Bucket(v bool)`

SetDefaultS3Bucket sets DefaultS3Bucket field to given value.


### GetS3Bucket

`func (o *IdentityProfileIdentityErrorReportArguments) GetS3Bucket() string`

GetS3Bucket returns the S3Bucket field if non-nil, zero value otherwise.

### GetS3BucketOk

`func (o *IdentityProfileIdentityErrorReportArguments) GetS3BucketOk() (*string, bool)`

GetS3BucketOk returns a tuple with the S3Bucket field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetS3Bucket

`func (o *IdentityProfileIdentityErrorReportArguments) SetS3Bucket(v string)`

SetS3Bucket sets S3Bucket field to given value.

### HasS3Bucket

`func (o *IdentityProfileIdentityErrorReportArguments) HasS3Bucket() bool`

HasS3Bucket returns a boolean if a field has been set.


[[Back to top]](#) 


