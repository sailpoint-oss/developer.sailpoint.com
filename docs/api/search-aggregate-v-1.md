## OpenAPI

```yaml POST /search/v1/aggregate
openapi: 3.0.1
info:
  title: Identity Security Cloud API
  description: Use these APIs to interact with the Identity Security Cloud platform to achieve repeatable, automated processes with greater scalability. We encourage you to join the SailPoint Developer Community forum at https://developer.sailpoint.com/discuss to connect with other developers using our APIs.
  termsOfService: https://developer.sailpoint.com/discuss/tos
  contact:
    name: Developer Relations
    url: https://developer.sailpoint.com/discuss/api-help
  license:
    name: MIT
    url: https://opensource.org/licenses/MIT
  version: v1
servers:
  - url: https://{tenant}.api.identitynow.com
    description: This is the production API server.
    variables:
      tenant:
        default: sailpoint
        description: This is the name of your tenant, typically your company's name.
  - url: https://{apiUrl}
    description: This is the versioned API server.
    variables:
      apiUrl:
        default: sailpoint.api.identitynow.com
        description: This is the api url of your tenant
paths:
  /search/v1/aggregate:
    post:
      description: 'Performs a search query aggregation and returns the aggregation result. By default, you can page a maximum of 10,000 search result records.  To page past 10,000 records, you can use searchAfter paging.  Refer to [Paginating Search Queries](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-search-queries) for more information about how to implement searchAfter paging. '
      operationId: searchAggregateV1
      security:
        - userAuth:
            - sp:search:read
        - applicationAuth:
            - sp:search:read
      parameters:
        - in: query
          name: offset
          description: |-
            Offset into the full result set. Usually specified with *limit* to paginate through the results.
            See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
          required: false
          example: 0
          schema:
            type: integer
            format: int32
            minimum: 0
            default: 0
        - in: query
          name: limit
          description: |-
            Max number of results to return.
            See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
          required: false
          example: 250
          schema:
            type: integer
            format: int32
            minimum: 0
            maximum: 250
            default: 250
        - in: query
          name: count
          description: |-
            If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.

            Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.

            See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
          required: false
          example: true
          schema:
            type: boolean
            default: false
      requestBody:
        content:
          application/json:
            schema:
              type: object
              properties:
                indices:
                  description: The names of the Elasticsearch indices in which to search. If none are provided, then all indices will be searched.
                  externalDocs:
                    description: Learn more about search indices here.
                    url: https://documentation.sailpoint.com/saas/help/search/searchable-fields.html
                  type: array
                  items:
                    description: |-
                      Enum representing the currently supported indices.
                      Additional values may be added in the future without notice.
                    type: string
                    enum:
                      - accessprofiles
                      - accountactivities
                      - entitlements
                      - events
                      - identities
                      - roles
                      - '*'
                    example: identities
                    title: index
                  example:
                    - identities
                queryType:
                  description: |-
                    The type of query to use.  By default, the `SAILPOINT` query type is used, which requires the `query` object to be defined in the request body.
                    To use the `queryDsl` or `typeAheadQuery` objects in the request, you must set the type to `DSL` or `TYPEAHEAD` accordingly.
                    Additional values may be added in the future without notice.
                  type: string
                  enum:
                    - DSL
                    - SAILPOINT
                    - TEXT
                    - TYPEAHEAD
                  default: SAILPOINT
                  example: SAILPOINT
                  title: querytype
                queryVersion:
                  allOf:
                    - description: The current Elasticserver version.
                      type: string
                      default: '5.2'
                      example: '5.2'
                      title: elasticversion
                    - type: string
                      description: |-
                        The version of the query object.
                        This version number will map to the version of Elasticsearch for the query strings and objects being used.
                query:
                  type: object
                  description: Query parameters used to construct an Elasticsearch query object.
                  properties:
                    query:
                      description: The query using the Elasticsearch [Query String Query](https://www.elastic.co/guide/en/elasticsearch/reference/5.2/query-dsl-query-string-query.html#query-string) syntax from the Query DSL extended by SailPoint to support Nested queries.
                      type: string
                      example: name:a*
                    fields:
                      description: |-
                        The fields the query will be applied to.  Fields provide you with a simple way to add additional fields to search, without making the query too complicated.  For example, you can use the fields to specify that you want your query of "a*" to be applied to "name", "firstName", and the "source.name".  The response will include all results matching the "a*" query found in those three fields. 
                        A field's availability depends on the indices being searched.  For example, if you are searching "identities", you can apply your search to the "firstName" field, but you couldn't use "firstName" with a search on "access profiles".  Refer to the response schema for the respective lists of available fields. 
                      type: string
                      example:
                        - firstName,lastName,email
                    timeZone:
                      description: The time zone to be applied to any range query related to dates.
                      type: string
                      example: America/Chicago
                    innerHit:
                      description: The innerHit query object returns a flattened list of results for the specified nested type.
                      type: object
                      required:
                        - query
                        - type
                      properties:
                        query:
                          description: The search query using the Elasticsearch [Query String Query](https://www.elastic.co/guide/en/elasticsearch/reference/5.2/query-dsl-query-string-query.html#query-string) syntax from the Query DSL extended by SailPoint to support Nested queries.
                          type: string
                          example: source.name:\"Active Directory\"
                        type:
                          description: The nested type to use in the inner hits query.  The nested type [Nested Type](https://www.elastic.co/guide/en/elasticsearch/reference/current/nested.html) refers to a document "nested" within another document. For example, an identity can have nested documents for access, accounts, and apps.
                          type: string
                          example: access
                      title: innerhit
                  title: query
                queryDsl:
                  description: The search query using the Elasticsearch [Query DSL](https://www.elastic.co/guide/en/elasticsearch/reference/7.10/query-dsl.html) syntax.
                  type: object
                  example:
                    match:
                      name: john.doe
                textQuery:
                  type: object
                  description: Query parameters used to construct an Elasticsearch text query object.
                  required:
                    - terms
                    - fields
                  properties:
                    terms:
                      description: Words or characters that specify a particular thing to be searched for.
                      type: array
                      items:
                        type: string
                      example:
                        - The quick brown fox
                        - '3141592'
                        - '7'
                    fields:
                      description: The fields to be searched.
                      type: array
                      items:
                        type: string
                      example:
                        - displayName
                        - employeeNumber
                        - roleCount
                    matchAny:
                      description: Indicates that at least one of the terms must be found in the specified fields;  otherwise, all terms must be found.
                      type: boolean
                      default: false
                      example: false
                    contains:
                      description: Indicates that the terms can be located anywhere in the specified fields;  otherwise, the fields must begin with the terms.
                      type: boolean
                      default: false
                      example: true
                  title: textquery
                typeAheadQuery:
                  type: object
                  description: 'Query parameters used to construct an Elasticsearch type ahead query object.  The typeAheadQuery performs a search for top values beginning with the typed values. For example, typing "Jo" results in top hits matching "Jo." Typing "Job" results in top hits matching "Job." '
                  required:
                    - query
                    - field
                  properties:
                    query:
                      description: The type ahead query string used to construct a phrase prefix match query.
                      type: string
                      example: Work
                    field:
                      description: The field on which to perform the type ahead search.
                      type: string
                      example: source.name
                    nestedType:
                      description: The nested type.
                      type: string
                      example: access
                    maxExpansions:
                      description: |-
                        The number of suffixes the last term will be expanded into.
                        Influences the performance of the query and the number results returned.
                        Valid values: 1 to 1000.
                      type: integer
                      format: int32
                      minimum: 1
                      maximum: 1000
                      default: 10
                      example: 10
                    size:
                      description: The max amount of records the search will return.
                      type: integer
                      format: int32
                      minimum: 1
                      default: 100
                      example: 100
                    sort:
                      description: The sort order of the returned records.
                      type: string
                      default: desc
                      example: asc
                    sortByValue:
                      description: The flag that defines the sort type, by count or value.
                      type: boolean
                      default: false
                      example: true
                  title: typeaheadquery
                includeNested:
                  description: Indicates whether nested objects from returned search results should be included.
                  type: boolean
                  default: true
                  example: true
                queryResultFilter:
                  type: object
                  description: Allows the query results to be filtered by specifying a list of fields to include and/or exclude from the result documents.
                  properties:
                    includes:
                      description: The list of field names to include in the result documents.
                      type: array
                      items:
                        type: string
                      example:
                        - name
                        - displayName
                    excludes:
                      description: The list of field names to exclude from the result documents.
                      type: array
                      items:
                        type: string
                      example:
                        - stacktrace
                  title: queryresultfilter
                aggregationType:
                  description: |
                    Enum representing the currently available query languages for aggregations, which are used to perform calculations or groupings on search results.

                    Additional values may be added in the future without notice.
                  type: string
                  enum:
                    - DSL
                    - SAILPOINT
                  default: DSL
                  example: DSL
                  title: aggregationtype
                aggregationsVersion:
                  allOf:
                    - description: The current Elasticserver version.
                      type: string
                      default: '5.2'
                      example: '5.2'
                      title: elasticversion
                    - type: string
                      description: |-
                        The version of the language being used for aggregation queries.
                        This version number will map to the version of Elasticsearch for the aggregation query object.
                aggregationsDsl:
                  description: The aggregation search query using Elasticsearch [Aggregations](https://www.elastic.co/guide/en/elasticsearch/reference/5.2/search-aggregations.html) syntax.
                  type: object
                  example: {}
                aggregations:
                  description: |
                    The aggregation’s specifications, such as the groupings and calculations to be performed.
                  allOf:
                    - type: object
                      properties:
                        nested:
                          type: object
                          description: The nested aggregation object.
                          required:
                            - name
                            - type
                          properties:
                            name:
                              description: The name of the nested aggregate to be included in the result.
                              type: string
                              example: id
                            type:
                              description: The type of the nested object.
                              type: string
                              example: access
                          title: nestedaggregation
                        metric:
                          type: object
                          description: The calculation done on the results of the query
                          required:
                            - name
                            - field
                          properties:
                            name:
                              description: |-
                                The name of the metric aggregate to be included in the result.
                                If the metric aggregation is omitted, the resulting aggregation will be a count of the documents in the search results.
                              type: string
                              example: Access Name Count
                            type:
                              description: |-
                                Enum representing the currently supported metric aggregation types.
                                Additional values may be added in the future without notice.
                              type: string
                              enum:
                                - COUNT
                                - UNIQUE_COUNT
                                - AVG
                                - SUM
                                - MEDIAN
                                - MIN
                                - MAX
                              default: UNIQUE_COUNT
                              example: COUNT
                              title: metrictype
                            field:
                              description: |
                                The field the calculation is performed on.

                                Prefix the field name with '@' to reference a nested object.
                              type: string
                              example: '@access.name'
                          title: metricaggregation
                        filter:
                          type: object
                          description: An additional filter to constrain the results of the search query.
                          required:
                            - name
                            - field
                            - value
                          properties:
                            name:
                              description: The name of the filter aggregate to be included in the result.
                              type: string
                              example: Entitlements
                            type:
                              description: |-
                                Enum representing the currently supported filter aggregation types.
                                Additional values may be added in the future without notice.
                              type: string
                              enum:
                                - TERM
                              default: TERM
                              example: TERM
                              title: searchfiltertype
                            field:
                              description: |
                                The search field to apply the filter to.

                                Prefix the field name with '@' to reference a nested object.
                              type: string
                              example: access.type
                            value:
                              description: The value to filter on.
                              type: string
                              example: ENTITLEMENT
                          title: filteraggregation
                        bucket:
                          type: object
                          description: The bucket to group the results of the aggregation query by.
                          required:
                            - name
                            - field
                          properties:
                            name:
                              description: The name of the bucket aggregate to be included in the result.
                              type: string
                              example: Identity Locations
                            type:
                              description: |-
                                Enum representing the currently supported bucket aggregation types.
                                Additional values may be added in the future without notice.
                              type: string
                              enum:
                                - TERMS
                              default: TERMS
                              example: TERMS
                              title: buckettype
                            field:
                              description: |-
                                The field to bucket on.
                                Prefix the field name with '@' to reference a nested object.
                              type: string
                              example: attributes.city
                            size:
                              description: Maximum number of buckets to include.
                              type: integer
                              format: int32
                              example: 100
                            minDocCount:
                              description: Minimum number of documents a bucket should have.
                              type: integer
                              format: int32
                              example: 2
                          title: bucketaggregation
                      title: aggregations
                    - type: object
                      properties:
                        subAggregation:
                          description: Aggregation to be performed on the result of the parent bucket aggregation.
                          allOf:
                            - type: object
                              properties:
                                nested:
                                  type: object
                                  description: The nested aggregation object.
                                  required:
                                    - name
                                    - type
                                  properties:
                                    name:
                                      description: The name of the nested aggregate to be included in the result.
                                      type: string
                                      example: id
                                    type:
                                      description: The type of the nested object.
                                      type: string
                                      example: access
                                  title: nestedaggregation
                                metric:
                                  type: object
                                  description: The calculation done on the results of the query
                                  required:
                                    - name
                                    - field
                                  properties:
                                    name:
                                      description: |-
                                        The name of the metric aggregate to be included in the result.
                                        If the metric aggregation is omitted, the resulting aggregation will be a count of the documents in the search results.
                                      type: string
                                      example: Access Name Count
                                    type:
                                      description: |-
                                        Enum representing the currently supported metric aggregation types.
                                        Additional values may be added in the future without notice.
                                      type: string
                                      enum:
                                        - COUNT
                                        - UNIQUE_COUNT
                                        - AVG
                                        - SUM
                                        - MEDIAN
                                        - MIN
                                        - MAX
                                      default: UNIQUE_COUNT
                                      example: COUNT
                                      title: metrictype
                                    field:
                                      description: |
                                        The field the calculation is performed on.

                                        Prefix the field name with '@' to reference a nested object.
                                      type: string
                                      example: '@access.name'
                                  title: metricaggregation
                                filter:
                                  type: object
                                  description: An additional filter to constrain the results of the search query.
                                  required:
                                    - name
                                    - field
                                    - value
                                  properties:
                                    name:
                                      description: The name of the filter aggregate to be included in the result.
                                      type: string
                                      example: Entitlements
                                    type:
                                      description: |-
                                        Enum representing the currently supported filter aggregation types.
                                        Additional values may be added in the future without notice.
                                      type: string
                                      enum:
                                        - TERM
                                      default: TERM
                                      example: TERM
                                      title: searchfiltertype
                                    field:
                                      description: |
                                        The search field to apply the filter to.

                                        Prefix the field name with '@' to reference a nested object.
                                      type: string
                                      example: access.type
                                    value:
                                      description: The value to filter on.
                                      type: string
                                      example: ENTITLEMENT
                                  title: filteraggregation
                                bucket:
                                  type: object
                                  description: The bucket to group the results of the aggregation query by.
                                  required:
                                    - name
                                    - field
                                  properties:
                                    name:
                                      description: The name of the bucket aggregate to be included in the result.
                                      type: string
                                      example: Identity Locations
                                    type:
                                      description: |-
                                        Enum representing the currently supported bucket aggregation types.
                                        Additional values may be added in the future without notice.
                                      type: string
                                      enum:
                                        - TERMS
                                      default: TERMS
                                      example: TERMS
                                      title: buckettype
                                    field:
                                      description: |-
                                        The field to bucket on.
                                        Prefix the field name with '@' to reference a nested object.
                                      type: string
                                      example: attributes.city
                                    size:
                                      description: Maximum number of buckets to include.
                                      type: integer
                                      format: int32
                                      example: 100
                                    minDocCount:
                                      description: Minimum number of documents a bucket should have.
                                      type: integer
                                      format: int32
                                      example: 2
                                  title: bucketaggregation
                              title: aggregations
                            - type: object
                              properties:
                                subAggregation:
                                  type: object
                                  properties:
                                    nested:
                                      type: object
                                      description: The nested aggregation object.
                                      required:
                                        - name
                                        - type
                                      properties:
                                        name:
                                          description: The name of the nested aggregate to be included in the result.
                                          type: string
                                          example: id
                                        type:
                                          description: The type of the nested object.
                                          type: string
                                          example: access
                                      title: nestedaggregation
                                    metric:
                                      type: object
                                      description: The calculation done on the results of the query
                                      required:
                                        - name
                                        - field
                                      properties:
                                        name:
                                          description: |-
                                            The name of the metric aggregate to be included in the result.
                                            If the metric aggregation is omitted, the resulting aggregation will be a count of the documents in the search results.
                                          type: string
                                          example: Access Name Count
                                        type:
                                          description: |-
                                            Enum representing the currently supported metric aggregation types.
                                            Additional values may be added in the future without notice.
                                          type: string
                                          enum:
                                            - COUNT
                                            - UNIQUE_COUNT
                                            - AVG
                                            - SUM
                                            - MEDIAN
                                            - MIN
                                            - MAX
                                          default: UNIQUE_COUNT
                                          example: COUNT
                                          title: metrictype
                                        field:
                                          description: |
                                            The field the calculation is performed on.

                                            Prefix the field name with '@' to reference a nested object.
                                          type: string
                                          example: '@access.name'
                                      title: metricaggregation
                                    filter:
                                      type: object
                                      description: An additional filter to constrain the results of the search query.
                                      required:
                                        - name
                                        - field
                                        - value
                                      properties:
                                        name:
                                          description: The name of the filter aggregate to be included in the result.
                                          type: string
                                          example: Entitlements
                                        type:
                                          description: |-
                                            Enum representing the currently supported filter aggregation types.
                                            Additional values may be added in the future without notice.
                                          type: string
                                          enum:
                                            - TERM
                                          default: TERM
                                          example: TERM
                                          title: searchfiltertype
                                        field:
                                          description: |
                                            The search field to apply the filter to.

                                            Prefix the field name with '@' to reference a nested object.
                                          type: string
                                          example: access.type
                                        value:
                                          description: The value to filter on.
                                          type: string
                                          example: ENTITLEMENT
                                      title: filteraggregation
                                    bucket:
                                      type: object
                                      description: The bucket to group the results of the aggregation query by.
                                      required:
                                        - name
                                        - field
                                      properties:
                                        name:
                                          description: The name of the bucket aggregate to be included in the result.
                                          type: string
                                          example: Identity Locations
                                        type:
                                          description: |-
                                            Enum representing the currently supported bucket aggregation types.
                                            Additional values may be added in the future without notice.
                                          type: string
                                          enum:
                                            - TERMS
                                          default: TERMS
                                          example: TERMS
                                          title: buckettype
                                        field:
                                          description: |-
                                            The field to bucket on.
                                            Prefix the field name with '@' to reference a nested object.
                                          type: string
                                          example: attributes.city
                                        size:
                                          description: Maximum number of buckets to include.
                                          type: integer
                                          format: int32
                                          example: 100
                                        minDocCount:
                                          description: Minimum number of documents a bucket should have.
                                          type: integer
                                          format: int32
                                          example: 2
                                      title: bucketaggregation
                                  title: aggregations
                                  description: Aggregation to be performed on the result of the parent bucket aggregation.
                          title: subsearchaggregationspecification
                  title: searchaggregationspecification
                sort:
                  description: The fields to be used to sort the search results. Use + or - to specify the sort direction.
                  type: array
                  items:
                    type: string
                  example:
                    - displayName
                    - +id
                searchAfter:
                  description: |-
                    Used to begin the search window at the values specified.
                    This parameter consists of the last values of the sorted fields in the current record set.
                    This is used to expand the Elasticsearch limit of 10K records by shifting the 10K window to begin at this value.
                    It is recommended that you always include the ID of the object in addition to any other fields on this parameter in order to ensure you don't get duplicate results while paging.
                    For example, when searching for identities, if you are sorting by displayName you will also want to include ID, for example ["displayName", "id"]. 
                    If the last identity ID in the search result is 2c91808375d8e80a0175e1f88a575221 and the last displayName is "John Doe", then using that displayName and ID will start a new search after this identity.
                    The searchAfter value will look like ["John Doe","2c91808375d8e80a0175e1f88a575221"]
                  type: array
                  items:
                    type: string
                  example:
                    - John Doe
                    - 2c91808375d8e80a0175e1f88a575221
                filters:
                  description: The filters to be applied for each filtered field name.
                  type: object
                  additionalProperties:
                    type: object
                    properties:
                      type:
                        description: |-
                          Enum representing the currently supported filter types.
                          Additional values may be added in the future without notice.
                        type: string
                        enum:
                          - EXISTS
                          - RANGE
                          - TERMS
                        example: RANGE
                        title: filtertype
                      range:
                        type: object
                        description: The range of values to be filtered.
                        properties:
                          lower:
                            description: The lower bound of the range.
                            type: object
                            required:
                              - value
                            properties:
                              value:
                                description: The value of the range's endpoint.
                                type: string
                                example: '1'
                              inclusive:
                                description: Indicates if the endpoint is included in the range.
                                type: boolean
                                default: false
                                example: false
                            title: bound
                          upper:
                            description: The upper bound of the range.
                            type: object
                            required:
                              - value
                            properties:
                              value:
                                description: The value of the range's endpoint.
                                type: string
                                example: '1'
                              inclusive:
                                description: Indicates if the endpoint is included in the range.
                                type: boolean
                                default: false
                                example: false
                            title: bound
                        title: range
                      terms:
                        description: The terms to be filtered.
                        type: array
                        items:
                          type: string
                          example: account_count
                      exclude:
                        description: Indicates if the filter excludes results.
                        type: boolean
                        default: false
                        example: false
                    title: filter
                  example: {}
              title: search
            examples:
              metricAggregation:
                summary: Metricaggregation
                value:
                  indices:
                    - identities
                  aggregationType: SAILPOINT
                  aggregations:
                    metric:
                      name: How Many Locations
                      type: UNIQUE_COUNT
                      field: attributes.city
              metricAggregation-dsl:
                summary: Metricaggregation using dsl
                value:
                  indices:
                    - identities
                  aggregationType: DSL
                  aggregationsDsl:
                    How Many Locations:
                      cardinality:
                        field: attributes.city.exact
              bucketAggregation:
                summary: Bucketaggregation
                value:
                  indices:
                    - identities
                  aggregationType: SAILPOINT
                  aggregations:
                    bucket:
                      name: Identity Locations
                      type: TERMS
                      field: attributes.city
              bucketAggregation-dsl:
                summary: Bucketaggregation using dsl
                value:
                  indices:
                    - identities
                  aggregationType: DSL
                  aggregationsDsl:
                    Identity Locations:
                      terms:
                        field: attributes.city.exact
              nestedAggregation-bucketAggregation:
                summary: Nestedaggregation with bucketaggregation
                value:
                  indices:
                    - identities
                  aggregationType: SAILPOINT
                  aggregations:
                    nested:
                      name: Access
                      field: access
                      type: TERMS
                    bucket:
                      name: Access Source Name
                      type: TERMS
                      field: access.source.name
              nestedAggregation-bucketAggregation-dsl:
                summary: Nestedaggregation with bucketaggregation using dsl
                value:
                  indices:
                    - identities
                  aggregationType: DSL
                  aggregationsDsl:
                    access:
                      nested:
                        path: access
                      aggs:
                        Access Source Name:
                          terms:
                            field: access.source.name.exact
              nestedAggregation-filterAggregation-bucketAggregation:
                summary: Nestedaggregation with filteraggregation and bucketaggregation
                value:
                  indices:
                    - identities
                  aggregationType: SAILPOINT
                  aggregations:
                    nested:
                      name: Access
                      field: access
                      type: TERMS
                    filter:
                      name: Entitlements
                      field: access.type
                      value: ENTITLEMENT
                    bucket:
                      name: Access Name
                      type: TERMS
                      field: access.name
              nestedAggregation-filterAggregation-bucketAggregation-dsl:
                summary: Nestedaggregation with filteraggregation and bucketaggregation using dsl
                value:
                  indices:
                    - identities
                  aggregationType: DSL
                  aggregationsDsl:
                    access:
                      nested:
                        path: access
                      aggs:
                        Entitlements:
                          filter:
                            term:
                              access.type: ENTITLEMENT
                          aggs:
                            Access Name:
                              terms:
                                field: access.name.exact
              bucketAggregation-subAggregation:
                summary: Bucketaggregation with subaggregation
                value:
                  indices:
                    - identities
                  aggregationType: SAILPOINT
                  aggregations:
                    bucket:
                      name: Identity Department
                      type: TERMS
                      field: attributes.department
                    subAggregation:
                      bucket:
                        name: Identity Locations
                        type: TERMS
                        field: attributes.city
              bucketAggregation-subAggregation-dsl:
                summary: Bucketaggregation with subaggregation using dsl
                value:
                  indices:
                    - identities
                  aggregationType: DSL
                  aggregationsDsl:
                    Identity Department:
                      terms:
                        field: attributes.department.exact
                      aggs:
                        Identity Locations:
                          terms:
                            field: attributes.city.exact
        required: true
      responses:
        '200':
          description: Aggregation results.
          content:
            application/json:
              schema:
                type: object
                properties:
                  aggregations:
                    type: object
                    description: |
                      The document containing the results of the aggregation. This document is controlled by Elasticsearch and depends on the type of aggregation query that is run.

                      See Elasticsearch [Aggregations](https://www.elastic.co/guide/en/elasticsearch/reference/5.2/search-aggregations.html) documentation for information.
                    example:
                      Identity Locations:
                        buckets:
                          - key: Austin
                            doc_count: 109
                          - key: London
                            doc_count: 64
                          - key: San Jose
                            doc_count: 27
                          - key: Brussels
                            doc_count: 26
                          - key: Sao Paulo
                            doc_count: 24
                          - key: Munich
                            doc_count: 23
                          - key: Singapore
                            doc_count: 22
                          - key: Tokyo
                            doc_count: 20
                          - key: Taipei
                            doc_count: 16
                  hits:
                    description: |
                      The results of the aggregation search query.
                    type: array
                    items:
                      type: object
                      oneOf:
                        - type: object
                          allOf:
                            - description: 'More complete representation of an access profile.  '
                              allOf:
                                - type: object
                                  properties:
                                    description:
                                      type: string
                                      description: Access item's description.
                                      example: Admin access
                                    created:
                                      type: string
                                      description: ISO-8601 date-time referring to the time when the object was created.
                                      nullable: true
                                      format: date-time
                                      example: '2018-06-25T20:22:28.104Z'
                                    modified:
                                      type: string
                                      description: ISO-8601 date-time referring to the time when the object was last modified.
                                      nullable: true
                                      format: date-time
                                      example: '2018-06-25T20:22:28.104Z'
                                    synced:
                                      type: string
                                      description: |-
                                        ISO-8601 date-time referring to the date-time when object was queued to be synced into search database for use in the search API.  
                                        This date-time changes anytime there is an update to the object, which triggers a synchronization event being sent to the search database. 
                                        There may be some delay between the `synced` time and the time when the updated data is actually available in the search API. 
                                      nullable: true
                                      format: date-time
                                      example: '2018-06-25T20:22:33.104Z'
                                    enabled:
                                      type: boolean
                                      description: Indicates whether the access item is currently enabled.
                                      default: false
                                      example: true
                                    requestable:
                                      type: boolean
                                      description: Indicates whether the access item can be requested.
                                      default: true
                                      example: true
                                    requestCommentsRequired:
                                      type: boolean
                                      description: Indicates whether comments are required for requests to access the item.
                                      default: false
                                      example: false
                                    owner:
                                      type: object
                                      description: Owner's identity.
                                      properties:
                                        type:
                                          type: string
                                          description: Owner's DTO type.
                                          enum:
                                            - IDENTITY
                                          example: IDENTITY
                                        id:
                                          type: string
                                          description: Owner's identity ID.
                                          example: 2c9180a46faadee4016fb4e018c20639
                                        name:
                                          type: string
                                          description: Owner's display name.
                                          example: Support
                                        email:
                                          type: string
                                          description: Owner's email.
                                          example: cloud-support@sailpoint.com
                                  title: baseaccess
                                - type: object
                                  required:
                                    - id
                                    - name
                                  properties:
                                    id:
                                      type: string
                                      description: Access profile's ID.
                                      example: 2c9180825a6c1adc015a71c9023f0818
                                    name:
                                      type: string
                                      description: Access profile's name.
                                      example: Cloud Eng
                                    source:
                                      type: object
                                      description: Access profile's source.
                                      properties:
                                        id:
                                          type: string
                                          description: Source's ID.
                                          example: ff8081815757d4fb0157588f3d9d008f
                                        name:
                                          type: string
                                          description: Source's name.
                                          example: Employees
                                    entitlements:
                                      type: array
                                      description: Entitlements the access profile has access to.
                                      items:
                                        type: object
                                        properties:
                                          hasPermissions:
                                            type: boolean
                                            description: Indicates whether the entitlement has permissions.
                                            default: false
                                            example: false
                                          description:
                                            type: string
                                            description: Entitlement's description.
                                            nullable: true
                                            example: Cloud engineering
                                          attribute:
                                            type: string
                                            description: Entitlement attribute's name.
                                            example: memberOf
                                          value:
                                            type: string
                                            description: Entitlement's value.
                                            example: CN=Cloud Engineering,DC=sailpoint,DC=COM
                                          schema:
                                            type: string
                                            description: Entitlement's schema.
                                            example: group
                                          privileged:
                                            type: boolean
                                            description: Indicates whether the entitlement is privileged.
                                            default: false
                                            example: false
                                          id:
                                            type: string
                                            description: Entitlement's ID.
                                            example: 2c918084575812550157589064f33b89
                                          name:
                                            type: string
                                            description: Entitlement's name.
                                            example: CN=Cloud Engineering,DC=sailpoint,DC=COM
                                        title: baseentitlement
                                    entitlementCount:
                                      type: integer
                                      description: Number of entitlements.
                                      example: 5
                                    segments:
                                      type: array
                                      description: Segments with the access profile.
                                      items:
                                        type: object
                                        properties:
                                          id:
                                            type: string
                                            example: b009b6e3-b56d-41d9-8735-cb532ea0b017
                                            description: Segment's unique ID.
                                          name:
                                            type: string
                                            example: Test Segment
                                            description: Segment's display name.
                                        title: basesegment
                                    segmentCount:
                                      type: integer
                                      description: Number of segments with the access profile.
                                      format: int32
                                      example: 1
                                    tags:
                                      type: array
                                      description: Tags that have been applied to the object.
                                      items:
                                        type: string
                                      example:
                                        - TAG_1
                                        - TAG_2
                                      title: tags
                                    apps:
                                      type: array
                                      description: Applications with the access profile
                                      items:
                                        type: object
                                        properties:
                                          id:
                                            type: string
                                            example: 2c91808568c529c60168cca6f90c1313
                                            description: The unique ID of the referenced object.
                                          name:
                                            type: string
                                            description: Name of application
                                            example: Travel and Expense
                                          description:
                                            description: Description of application.
                                            type: string
                                            example: Travel and Expense Application
                                          owner:
                                            type: object
                                            description: Owner's identity.
                                            properties:
                                              type:
                                                type: string
                                                description: Owner's DTO type.
                                                enum:
                                                  - IDENTITY
                                                example: IDENTITY
                                              id:
                                                type: string
                                                description: Owner's identity ID.
                                                example: 2c9180a46faadee4016fb4e018c20639
                                              name:
                                                type: string
                                                description: Owner's display name.
                                                example: John Doe
                                              email:
                                                type: string
                                                description: Owner's email.
                                                example: john.doe@sailpoint.com
                                        title: accessapps
                              title: accessprofiledocument
                            - type: object
                              properties:
                                pod:
                                  type: string
                                  example: pod01-useast1
                                  description: Name of the pod.
                                org:
                                  type: string
                                  example: org-name
                                  description: Name of the tenant.
                                _type:
                                  description: |-
                                    Enum representing the currently supported document types.

                                    Additional values may be added in the future without notice.
                                  type: string
                                  enum:
                                    - accessprofile
                                    - accountactivity
                                    - entitlement
                                    - event
                                    - identity
                                    - role
                                  example: identity
                                  title: documenttype
                                type:
                                  description: |-
                                    Enum representing the currently supported document types.

                                    Additional values may be added in the future without notice.
                                  type: string
                                  enum:
                                    - accessprofile
                                    - accountactivity
                                    - entitlement
                                    - event
                                    - identity
                                    - role
                                  example: identity
                                  title: documenttype
                                _index:
                                  type: string
                                  example: '44'
                                  description: Internal metadata field. This field is for SailPoint internal use only and is subject to change without notice. Do not rely on it in your integrations.
                              title: documentfields
                          title: accessprofiledocuments
                        - type: object
                          allOf:
                            - description: AccountActivity
                              type: object
                              properties:
                                id:
                                  type: string
                                  example: 2c91808375d8e80a0175e1f88a575222
                                  description: ID of account activity.
                                action:
                                  type: string
                                  description: Type of action performed in the activity.
                                  externalDocs:
                                    description: Learn more about account activity action types
                                    url: https://documentation.sailpoint.com/saas/help/search/searchable-fields.html#searching-account-activity-data
                                  example: Identity Refresh.
                                created:
                                  type: string
                                  description: ISO-8601 date-time referring to the time when the object was created.
                                  nullable: true
                                  format: date-time
                                  example: '2018-06-25T20:22:28.104Z'
                                modified:
                                  type: string
                                  description: ISO-8601 date-time referring to the time when the object was last modified.
                                  nullable: true
                                  format: date-time
                                  example: '2018-06-25T20:22:28.104Z'
                                synced:
                                  type: string
                                  description: |-
                                    ISO-8601 date-time referring to the date-time when object was queued to be synced into search database for use in the search API.  
                                    This date-time changes anytime there is an update to the object, which triggers a synchronization event being sent to the search database. 
                                    There may be some delay between the `synced` time and the time when the updated data is actually available in the search API. 
                                  example: '2018-06-25T20:22:28.104Z'
                                stage:
                                  type: string
                                  description: Activity's current stage.
                                  example: Completed
                                status:
                                  type: string
                                  description: Activity's current status.
                                  example: Complete
                                requester:
                                  allOf:
                                    - type: object
                                      properties:
                                        id:
                                          type: string
                                          example: 2c91808568c529c60168cca6f90c1313
                                          description: The unique ID of the referenced object.
                                        name:
                                          type: string
                                          example: John Doe
                                          description: The human readable name of the referenced object.
                                      title: reference
                                    - type: object
                                      properties:
                                        type:
                                          type: string
                                          example: Identity
                                          description: Type of object
                                  title: activityidentity
                                recipient:
                                  allOf:
                                    - type: object
                                      properties:
                                        id:
                                          type: string
                                          example: 2c91808568c529c60168cca6f90c1313
                                          description: The unique ID of the referenced object.
                                        name:
                                          type: string
                                          example: John Doe
                                          description: The human readable name of the referenced object.
                                      title: reference
                                    - type: object
                                      properties:
                                        type:
                                          type: string
                                          example: Identity
                                          description: Type of object
                                  title: activityidentity
                                trackingNumber:
                                  type: string
                                  description: Account activity's tracking number.
                                  example: 61aad0c9e8134eca89e76a35e0cabe3f
                                errors:
                                  type: array
                                  description: Errors provided by the source while completing account actions.
                                  items:
                                    type: string
                                  nullable: true
                                  example: null
                                warnings:
                                  type: array
                                  description: Warnings provided by the source while completing account actions.
                                  items:
                                    type: string
                                  nullable: true
                                  example: null
                                approvals:
                                  type: array
                                  description: Approvals performed on an item during activity.
                                  items:
                                    type: object
                                    properties:
                                      comments:
                                        type: array
                                        items:
                                          type: object
                                          properties:
                                            comment:
                                              type: string
                                              description: The comment text
                                              example: This request was autoapproved by our automated ETS subscriber.
                                            commenter:
                                              type: string
                                              description: The name of the commenter
                                              example: Automated AR Approval
                                            date:
                                              type: string
                                              nullable: true
                                              format: date-time
                                              example: '2018-06-25T20:22:28.104Z'
                                              description: A date-time in ISO-8601 format
                                              title: datetime
                                          title: approvalcomment-2
                                      modified:
                                        type: string
                                        nullable: true
                                        format: date-time
                                        example: '2018-06-25T20:22:28.104Z'
                                        description: A date-time in ISO-8601 format
                                        title: datetime
                                      owner:
                                        allOf:
                                          - type: object
                                            properties:
                                              id:
                                                type: string
                                                example: 2c91808568c529c60168cca6f90c1313
                                                description: The unique ID of the referenced object.
                                              name:
                                                type: string
                                                example: John Doe
                                                description: The human readable name of the referenced object.
                                            title: reference
                                          - type: object
                                            properties:
                                              type:
                                                type: string
                                                example: Identity
                                                description: Type of object
                                        title: activityidentity
                                      result:
                                        type: string
                                        description: The result of the approval
                                        example: Finished
                                      attributeRequest:
                                        type: object
                                        properties:
                                          name:
                                            type: string
                                            description: Attribute name.
                                            example: groups
                                          op:
                                            type: string
                                            description: Operation to perform on attribute.
                                            example: Add
                                          value:
                                            oneOf:
                                              - type: string
                                                example: '3203537556531076'
                                              - type: array
                                                items:
                                                  type: string
                                                  example:
                                                    - '3203537556531076'
                                                    - '1263537556831096'
                                            description: Value of attribute.
                                        title: attributerequest
                                      source:
                                        allOf:
                                          - type: object
                                            properties:
                                              id:
                                                type: string
                                                example: 2c91808568c529c60168cca6f90c1313
                                                description: The unique ID of the referenced object.
                                              name:
                                                type: string
                                                example: John Doe
                                                description: The human readable name of the referenced object.
                                            title: reference
                                          - type: object
                                            properties:
                                              type:
                                                type: string
                                                example: Delimited File
                                                description: Type of source returned.
                                        title: accountsource
                                    title: approval
                                originalRequests:
                                  type: array
                                  description: Original actions that triggered all individual source actions related to the account action.
                                  items:
                                    type: object
                                    properties:
                                      accountId:
                                        type: string
                                        description: Account ID.
                                        example: CN=Abby Smith,OU=Austin,OU=Americas,OU=Demo,DC=seri,DC=acme,DC=com
                                      result:
                                        type: object
                                        properties:
                                          status:
                                            type: string
                                            description: Request result status
                                            example: Manual Task Created
                                        title: result
                                      attributeRequests:
                                        type: array
                                        description: Attribute changes requested for account.
                                        items:
                                          type: object
                                          properties:
                                            name:
                                              type: string
                                              description: Attribute name.
                                              example: groups
                                            op:
                                              type: string
                                              description: Operation to perform on attribute.
                                              example: Add
                                            value:
                                              oneOf:
                                                - type: string
                                                  example: '3203537556531076'
                                                - type: array
                                                  items:
                                                    type: string
                                                    example:
                                                      - '3203537556531076'
                                                      - '1263537556831096'
                                              description: Value of attribute.
                                          title: attributerequest
                                      op:
                                        type: string
                                        description: Operation used.
                                        example: add
                                      source:
                                        allOf:
                                          - type: object
                                            properties:
                                              id:
                                                type: string
                                                example: 2c91808568c529c60168cca6f90c1313
                                                description: The unique ID of the referenced object.
                                              name:
                                                type: string
                                                example: John Doe
                                                description: The human readable name of the referenced object.
                                            title: reference
                                          - type: object
                                            properties:
                                              type:
                                                type: string
                                                example: Delimited File
                                                description: Type of source returned.
                                        title: accountsource
                                        description: Account's source.
                                    title: originalrequest
                                expansionItems:
                                  type: array
                                  description: Controls that translated the attribute requests into actual provisioning actions on the source.
                                  items:
                                    type: object
                                    properties:
                                      accountId:
                                        type: string
                                        description: The ID of the account
                                        example: 2c91808981f58ea601821c3e93482e6f
                                      cause:
                                        type: string
                                        example: Role
                                        description: Cause of the expansion item.
                                      name:
                                        type: string
                                        description: The name of the item
                                        example: smartsheet-role
                                      attributeRequest:
                                        type: object
                                        properties:
                                          name:
                                            type: string
                                            description: Attribute name.
                                            example: groups
                                          op:
                                            type: string
                                            description: Operation to perform on attribute.
                                            example: Add
                                          value:
                                            oneOf:
                                              - type: string
                                                example: '3203537556531076'
                                              - type: array
                                                items:
                                                  type: string
                                                  example:
                                                    - '3203537556531076'
                                                    - '1263537556831096'
                                            description: Value of attribute.
                                        title: attributerequest
                                      source:
                                        allOf:
                                          - type: object
                                            properties:
                                              id:
                                                type: string
                                                example: 2c91808568c529c60168cca6f90c1313
                                                description: The unique ID of the referenced object.
                                              name:
                                                type: string
                                                example: John Doe
                                                description: The human readable name of the referenced object.
                                            title: reference
                                          - type: object
                                            properties:
                                              type:
                                                type: string
                                                example: Delimited File
                                                description: Type of source returned.
                                        title: accountsource
                                      id:
                                        type: string
                                        description: ID of the expansion item
                                        example: ac2887ffe0e7435a8c18c73f7ae94c7b
                                      state:
                                        type: string
                                        description: State of the expansion item
                                        example: EXECUTING
                                    title: expansionitem
                                accountRequests:
                                  type: array
                                  description: Account data for each individual source action triggered by the original requests.
                                  items:
                                    type: object
                                    properties:
                                      accountId:
                                        type: string
                                        description: Unique ID of the account
                                        example: John.Doe
                                      attributeRequests:
                                        type: array
                                        items:
                                          type: object
                                          properties:
                                            name:
                                              type: string
                                              description: Attribute name.
                                              example: groups
                                            op:
                                              type: string
                                              description: Operation to perform on attribute.
                                              example: Add
                                            value:
                                              oneOf:
                                                - type: string
                                                  example: '3203537556531076'
                                                - type: array
                                                  items:
                                                    type: string
                                                    example:
                                                      - '3203537556531076'
                                                      - '1263537556831096'
                                              description: Value of attribute.
                                          title: attributerequest
                                      op:
                                        type: string
                                        example: Modify
                                        description: The operation that was performed
                                      provisioningTarget:
                                        allOf:
                                          - type: object
                                            properties:
                                              id:
                                                type: string
                                                example: 2c91808568c529c60168cca6f90c1313
                                                description: The unique ID of the referenced object.
                                              name:
                                                type: string
                                                example: John Doe
                                                description: The human readable name of the referenced object.
                                            title: reference
                                          - type: object
                                            properties:
                                              type:
                                                type: string
                                                example: Delimited File
                                                description: Type of source returned.
                                        title: accountsource
                                      result:
                                        type: object
                                        properties:
                                          errors:
                                            type: array
                                            items:
                                              type: string
                                              example: |-
                                                [ConnectorError] [
                                                  {
                                                    "code": "unrecognized_keys",
                                                    "keys": [
                                                      "groups"
                                                    ],
                                                    "path": [],
                                                    "message": "Unrecognized key(s) in object: 'groups'"
                                                  }
                                                ] (requestId: 5e9d6df5-9b1b-47d9-9bf1-dc3a2893299e)
                                            description: Error message.
                                          status:
                                            type: string
                                            description: The status of the account request
                                            example: failed
                                          ticketId:
                                            type: string
                                            nullable: true
                                            example: null
                                            description: ID of associated ticket.
                                      source:
                                        allOf:
                                          - type: object
                                            properties:
                                              id:
                                                type: string
                                                example: 2c91808568c529c60168cca6f90c1313
                                                description: The unique ID of the referenced object.
                                              name:
                                                type: string
                                                example: John Doe
                                                description: The human readable name of the referenced object.
                                            title: reference
                                          - type: object
                                            properties:
                                              type:
                                                type: string
                                                example: Delimited File
                                                description: Type of source returned.
                                        title: accountsource
                                    title: accountrequest
                                sources:
                                  type: string
                                  description: Sources involved in the account activity.
                                  example: smartsheet-test, airtable-v4, IdentityNow
                              title: accountactivitydocument
                            - type: object
                              properties:
                                pod:
                                  type: string
                                  example: pod01-useast1
                                  description: Name of the pod.
                                org:
                                  type: string
                                  example: org-name
                                  description: Name of the tenant.
                                _type:
                                  description: |-
                                    Enum representing the currently supported document types.

                                    Additional values may be added in the future without notice.
                                  type: string
                                  enum:
                                    - accessprofile
                                    - accountactivity
                                    - entitlement
                                    - event
                                    - identity
                                    - role
                                  example: identity
                                  title: documenttype
                                type:
                                  description: |-
                                    Enum representing the currently supported document types.

                                    Additional values may be added in the future without notice.
                                  type: string
                                  enum:
                                    - accessprofile
                                    - accountactivity
                                    - entitlement
                                    - event
                                    - identity
                                    - role
                                  example: identity
                                  title: documenttype
                                _index:
                                  type: string
                                  example: '44'
                                  description: Internal metadata field. This field is for SailPoint internal use only and is subject to change without notice. Do not rely on it in your integrations.
                              title: documentfields
                          title: accountactivitydocuments
                        - type: object
                          allOf:
                            - description: Entitlement
                              allOf:
                                - type: object
                                  required:
                                    - id
                                    - name
                                  properties:
                                    id:
                                      type: string
                                      example: 2c91808375d8e80a0175e1f88a575222
                                      description: ID of the referenced object.
                                    name:
                                      type: string
                                      example: john.doe
                                      description: The human readable name of the referenced object.
                                  title: basedocument
                                - type: object
                                  properties:
                                    modified:
                                      type: string
                                      description: ISO-8601 date-time referring to the time when the object was last modified.
                                      nullable: true
                                      format: date-time
                                      example: '2018-06-25T20:22:28.104Z'
                                    synced:
                                      type: string
                                      description: |-
                                        ISO-8601 date-time referring to the date-time when object was queued to be synced into search database for use in the search API.  
                                        This date-time changes anytime there is an update to the object, which triggers a synchronization event being sent to the search database. 
                                        There may be some delay between the `synced` time and the time when the updated data is actually available in the search API. 
                                    displayName:
                                      type: string
                                      description: Entitlement's display name.
                                      example: Admin
                                    source:
                                      type: object
                                      description: Entitlement's source.
                                      properties:
                                        id:
                                          type: string
                                          description: ID of entitlement's source.
                                          example: 2c91808b6e9e6fb8016eec1a2b6f7b5f
                                        name:
                                          type: string
                                          description: Display name of entitlement's source.
                                          example: ODS-HR-Employees
                                        type:
                                          type: string
                                          example: SOURCE
                                          description: Type of object.
                                    segments:
                                      type: array
                                      description: Segments with the entitlement.
                                      items:
                                        type: object
                                        properties:
                                          id:
                                            type: string
                                            example: b009b6e3-b56d-41d9-8735-cb532ea0b017
                                            description: Segment's unique ID.
                                          name:
                                            type: string
                                            example: Test Segment
                                            description: Segment's display name.
                                        title: basesegment
                                    segmentCount:
                                      type: integer
                                      description: Number of segments with the role.
                                      format: int32
                                      example: 1
                                    requestable:
                                      type: boolean
                                      description: Indicates whether the entitlement is requestable.
                                      default: false
                                      example: false
                                    cloudGoverned:
                                      type: boolean
                                      description: Indicates whether the entitlement is cloud governed.
                                      default: false
                                      example: false
                                    created:
                                      type: string
                                      description: ISO-8601 date-time referring to the time when the object was created.
                                      nullable: true
                                      format: date-time
                                      example: '2018-06-25T20:22:28.104Z'
                                    privileged:
                                      type: boolean
                                      description: Indicates whether the entitlement is privileged.
                                      default: false
                                      example: false
                                    tags:
                                      type: array
                                      description: Tags that have been applied to the object.
                                      items:
                                        type: string
                                      example:
                                        - TAG_1
                                        - TAG_2
                                      title: tags
                                    attribute:
                                      type: string
                                      description: Attribute information for the entitlement.
                                      example: groups
                                    value:
                                      type: string
                                      description: Value of the entitlement.
                                      example: 1733ff75-441e-4327-9bfc-3ac445fd8cd1
                                    sourceSchemaObjectType:
                                      type: string
                                      description: Source schema object type of the entitlement.
                                      example: group
                                    schema:
                                      type: string
                                      description: Schema type of the entitlement.
                                      example: group
                                    hash:
                                      type: string
                                      description: Read-only calculated hash value of an entitlement.
                                      example: c6fab95235584cca98a454a2f51e5683bc77d6a0
                                    attributes:
                                      type: object
                                      additionalProperties: true
                                      description: Attributes of the entitlement.
                                    truncatedAttributes:
                                      type: array
                                      description: Truncated attributes of the entitlement.
                                      items:
                                        type: string
                                    containsDataAccess:
                                      type: boolean
                                      description: Indicates whether the entitlement contains data access.
                                      default: false
                                    manuallyUpdatedFields:
                                      type: object
                                      description: Indicates whether the entitlement's display name and/or description have been manually updated.
                                      nullable: true
                                      properties:
                                        DESCRIPTION:
                                          type: boolean
                                          default: false
                                          example: false
                                        DISPLAY_NAME:
                                          type: boolean
                                          default: false
                                          example: false
                                    permissions:
                                      type: array
                                      items:
                                        type: object
                                        properties:
                                          target:
                                            type: string
                                            description: The target the permission would grants rights on.
                                            example: SYS.GV_$TRANSACTION
                                          rights:
                                            type: array
                                            description: All the rights (e.g. actions) that this permission allows on the target
                                            items:
                                              type: string
                                              example: SELECT
                              title: entitlementdocument
                            - type: object
                              properties:
                                pod:
                                  type: string
                                  example: pod01-useast1
                                  description: Name of the pod.
                                org:
                                  type: string
                                  example: org-name
                                  description: Name of the tenant.
                                _type:
                                  description: |-
                                    Enum representing the currently supported document types.

                                    Additional values may be added in the future without notice.
                                  type: string
                                  enum:
                                    - accessprofile
                                    - accountactivity
                                    - entitlement
                                    - event
                                    - identity
                                    - role
                                  example: identity
                                  title: documenttype
                                type:
                                  description: |-
                                    Enum representing the currently supported document types.

                                    Additional values may be added in the future without notice.
                                  type: string
                                  enum:
                                    - accessprofile
                                    - accountactivity
                                    - entitlement
                                    - event
                                    - identity
                                    - role
                                  example: identity
                                  title: documenttype
                                _index:
                                  type: string
                                  example: '44'
                                  description: Internal metadata field. This field is for SailPoint internal use only and is subject to change without notice. Do not rely on it in your integrations.
                              title: documentfields
                          title: entitlementdocuments
                        - type: object
                          allOf:
                            - type: object
                              description: Event
                              properties:
                                id:
                                  type: string
                                  example: 2c91808375d8e80a0175e1f88a575222
                                  description: ID of the entitlement.
                                name:
                                  type: string
                                  example: Add Entitlement Passed
                                  description: Name of the entitlement.
                                created:
                                  type: string
                                  description: ISO-8601 date-time referring to the time when the object was created.
                                  nullable: true
                                  format: date-time
                                  example: '2018-06-25T20:22:28.104Z'
                                synced:
                                  type: string
                                  description: |-
                                    ISO-8601 date-time referring to the date-time when object was queued to be synced into search database for use in the search API.  
                                    This date-time changes anytime there is an update to the object, which triggers a synchronization event being sent to the search database. 
                                    There may be some delay between the `synced` time and the time when the updated data is actually available in the search API. 
                                  example: '2018-06-25T20:22:28.104Z'
                                action:
                                  type: string
                                  description: Name of the event as it's displayed in audit reports.
                                  example: AddEntitlement
                                type:
                                  type: string
                                  description: Event type. Refer to [Event Types](https://documentation.sailpoint.com/saas/help/search/index.html#event-types) for a list of event types and their meanings.
                                  example: ACCESS_ITEM
                                actor:
                                  type: object
                                  properties:
                                    name:
                                      type: string
                                      description: Name of the actor that generated the event.
                                      example: System
                                target:
                                  type: object
                                  properties:
                                    name:
                                      type: string
                                      description: Name of the target, or recipient, of the event.
                                      example: Carol.Adams
                                stack:
                                  type: string
                                  description: The event's stack.
                                  example: tpe
                                trackingNumber:
                                  type: string
                                  description: ID of the group of events.
                                  example: 63f891e0735f4cc8bf1968144a1e7440
                                ipAddress:
                                  type: string
                                  description: Target system's IP address.
                                  example: 52.52.97.85
                                details:
                                  type: string
                                  description: ID of event's details.
                                  example: 73b65dfbed1842548c207432a18c84b0
                                attributes:
                                  type: object
                                  description: Attributes involved in the event.
                                  additionalProperties: true
                                  example:
                                    pod: stg03-useast1
                                    org: acme
                                    sourceName: SailPoint
                                objects:
                                  type: array
                                  description: Objects the event is happening to.
                                  items:
                                    type: string
                                    example: AUTHENTICATION
                                operation:
                                  type: string
                                  description: Operation, or action, performed during the event.
                                  example: ADD
                                status:
                                  type: string
                                  description: Event status. Refer to [Event Statuses](https://documentation.sailpoint.com/saas/help/search/index.html#event-statuses) for a list of event statuses and their meanings.
                                  example: PASSED
                                technicalName:
                                  type: string
                                  description: Event's normalized name. This normalized name always follows the pattern of 'objects_operation_status'.
                                  example: ENTITLEMENT_ADD_PASSED
                              title: eventdocument
                            - properties:
                                pod:
                                  type: string
                                  example: pod01-useast1
                                org:
                                  type: string
                                  example: org-name
                                _type:
                                  description: |-
                                    Enum representing the currently supported document types.

                                    Additional values may be added in the future without notice.
                                  type: string
                                  enum:
                                    - accessprofile
                                    - accountactivity
                                    - entitlement
                                    - event
                                    - identity
                                    - role
                                  example: identity
                                  title: documenttype
                                _index:
                                  type: string
                                  example: '44'
                                  description: Internal metadata field. This field is for SailPoint internal use only and is subject to change without notice. Do not rely on it in your integrations.
                          title: eventdocuments
                        - type: object
                          allOf:
                            - description: Identity
                              allOf:
                                - type: object
                                  required:
                                    - id
                                    - name
                                  properties:
                                    id:
                                      type: string
                                      example: 2c91808375d8e80a0175e1f88a575222
                                      description: ID of the referenced object.
                                    name:
                                      type: string
                                      example: john.doe
                                      description: The human readable name of the referenced object.
                                  title: basedocument
                                - allOf:
                                    - type: object
                                      properties:
                                        id:
                                          type: string
                                          example: 2c91808568c529c60168cca6f90c1313
                                          description: The unique ID of the referenced object.
                                        name:
                                          type: string
                                          example: John Doe
                                          description: The human readable name of the referenced object.
                                      title: reference
                                    - type: object
                                      properties:
                                        displayName:
                                          type: string
                                          example: John Q. Doe
                                  title: displayreference
                                - type: object
                                  properties:
                                    displayName:
                                      type: string
                                      example: Carol.Adams
                                      description: Identity's display name.
                                    firstName:
                                      type: string
                                      description: Identity's first name.
                                      example: Carol
                                    lastName:
                                      type: string
                                      description: Identity's last name.
                                      example: Adams
                                    email:
                                      type: string
                                      description: Identity's primary email address.
                                      example: Carol.Adams@sailpointdemo.com
                                    created:
                                      type: string
                                      description: ISO-8601 date-time referring to the time when the object was created.
                                      nullable: true
                                      format: date-time
                                      example: '2018-06-25T20:22:28.104Z'
                                    modified:
                                      type: string
                                      description: ISO-8601 date-time referring to the time when the object was last modified.
                                      nullable: true
                                      format: date-time
                                      example: '2018-06-25T20:22:28.104Z'
                                    phone:
                                      type: string
                                      description: Identity's phone number.
                                      example: +1 440-527-3672
                                    synced:
                                      type: string
                                      description: |-
                                        ISO-8601 date-time referring to the date-time when object was queued to be synced into search database for use in the search API.  
                                        This date-time changes anytime there is an update to the object, which triggers a synchronization event being sent to the search database. 
                                        There may be some delay between the `synced` time and the time when the updated data is actually available in the search API. 
                                    inactive:
                                      type: boolean
                                      description: Indicates whether the identity is inactive.
                                      default: false
                                      example: false
                                    protected:
                                      type: boolean
                                      description: Indicates whether the identity is protected.
                                      default: false
                                      example: false
                                    status:
                                      type: string
                                      description: Identity's status in SailPoint.
                                      example: UNREGISTERED
                                    employeeNumber:
                                      type: string
                                      description: Identity's employee number.
                                      example: 1a2a3d4e
                                    manager:
                                      type: object
                                      description: Identity's manager.
                                      nullable: true
                                      properties:
                                        id:
                                          type: string
                                          description: ID of identity's manager.
                                          example: 2c9180867dfe694b017e208e27c05799
                                        name:
                                          type: string
                                          description: Name of identity's manager.
                                          example: Amanda.Ross
                                        displayName:
                                          type: string
                                          description: Display name of identity's manager.
                                          example: Amanda.Ross
                                    isManager:
                                      type: boolean
                                      description: Indicates whether the identity is a manager of other identities.
                                      example: false
                                    identityProfile:
                                      type: object
                                      description: Identity's identity profile.
                                      properties:
                                        id:
                                          type: string
                                          description: Identity profile's ID.
                                          example: 3bc8ad26b8664945866b31339d1ff7d2
                                        name:
                                          type: string
                                          description: Identity profile's name.
                                          example: HR Employees
                                    source:
                                      type: object
                                      description: Identity's source.
                                      properties:
                                        id:
                                          type: string
                                          description: ID of identity's source.
                                          example: 2c91808b6e9e6fb8016eec1a2b6f7b5f
                                        name:
                                          type: string
                                          description: Display name of identity's source.
                                          example: ODS-HR-Employees
                                    attributes:
                                      type: object
                                      description: Map or dictionary of key/value pairs.
                                      additionalProperties: true
                                      example:
                                        country: US
                                        firstname: Carol
                                        cloudStatus: UNREGISTERED
                                    disabled:
                                      type: boolean
                                      description: Indicates whether the identity is disabled.
                                      default: false
                                      example: false
                                    locked:
                                      type: boolean
                                      description: Indicates whether the identity is locked.
                                      default: false
                                      example: false
                                    processingState:
                                      type: string
                                      description: Identity's processing state.
                                      nullable: true
                                      example: ERROR
                                    processingDetails:
                                      description: Identity's processing details.
                                      nullable: true
                                      type: object
                                      properties:
                                        date:
                                          type: string
                                          nullable: true
                                          format: date-time
                                          example: '2018-06-25T20:22:28.104Z'
                                          description: A date-time in ISO-8601 format
                                          title: datetime
                                        stage:
                                          type: string
                                          example: In Process
                                        retryCount:
                                          type: integer
                                          example: 0
                                          format: int32
                                        stackTrace:
                                          type: string
                                          example: <stack trace>
                                        message:
                                          type: string
                                          example: <message>
                                      title: processingdetails
                                    accounts:
                                      type: array
                                      description: List of accounts associated with the identity.
                                      items:
                                        allOf:
                                          - type: object
                                            properties:
                                              id:
                                                type: string
                                                example: 2c91808568c529c60168cca6f90c1313
                                                description: The unique ID of the referenced object.
                                              name:
                                                type: string
                                                example: John Doe
                                                description: The human readable name of the referenced object.
                                            title: reference
                                          - type: object
                                            properties:
                                              accountId:
                                                type: string
                                                description: Account ID.
                                                example: John.Doe
                                              source:
                                                allOf:
                                                  - type: object
                                                    properties:
                                                      id:
                                                        type: string
                                                        example: 2c91808568c529c60168cca6f90c1313
                                                        description: The unique ID of the referenced object.
                                                      name:
                                                        type: string
                                                        example: John Doe
                                                        description: The human readable name of the referenced object.
                                                    title: reference
                                                  - type: object
                                                    properties:
                                                      type:
                                                        type: string
                                                        example: Delimited File
                                                        description: Type of source returned.
                                                title: accountsource
                                              disabled:
                                                type: boolean
                                                description: Indicates whether the account is disabled.
                                                default: false
                                                example: false
                                              locked:
                                                type: boolean
                                                description: Indicates whether the account is locked.
                                                default: false
                                                example: false
                                              privileged:
                                                type: boolean
                                                description: Indicates whether the account is privileged.
                                                default: false
                                                example: false
                                              manuallyCorrelated:
                                                type: boolean
                                                description: Indicates whether the account has been manually correlated to an identity.
                                                default: false
                                                example: false
                                              passwordLastSet:
                                                type: string
                                                nullable: true
                                                format: date-time
                                                example: '2018-06-25T20:22:28.104Z'
                                                description: A date-time in ISO-8601 format
                                                title: datetime
                                              entitlementAttributes:
                                                type: object
                                                nullable: true
                                                description: Map or dictionary of key/value pairs.
                                                additionalProperties: true
                                                example:
                                                  moderator: true
                                                  admin: true
                                                  trust_level: '4'
                                              created:
                                                type: string
                                                description: ISO-8601 date-time referring to the time when the object was created.
                                                nullable: true
                                                format: date-time
                                                example: '2018-06-25T20:22:28.104Z'
                                              supportsPasswordChange:
                                                type: boolean
                                                description: Indicates whether the account supports password change.
                                                default: false
                                                example: false
                                              accountAttributes:
                                                type: object
                                                nullable: true
                                                description: Map or dictionary of key/value pairs.
                                                additionalProperties: true
                                                example:
                                                  type: global
                                                  admin: true
                                                  trust_level: '4'
                                        title: baseaccount
                                    accountCount:
                                      type: integer
                                      description: Number of accounts associated with the identity.
                                      format: int32
                                      example: 3
                                    apps:
                                      type: array
                                      description: List of applications the identity has access to.
                                      items:
                                        allOf:
                                          - type: object
                                            properties:
                                              id:
                                                type: string
                                                example: 2c91808568c529c60168cca6f90c1313
                                                description: The unique ID of the referenced object.
                                              name:
                                                type: string
                                                example: John Doe
                                                description: The human readable name of the referenced object.
                                            title: reference
                                          - type: object
                                            properties:
                                              source:
                                                type: object
                                                properties:
                                                  id:
                                                    type: string
                                                    example: 2c91808568c529c60168cca6f90c1313
                                                    description: The unique ID of the referenced object.
                                                  name:
                                                    type: string
                                                    example: John Doe
                                                    description: The human readable name of the referenced object.
                                                title: reference
                                              account:
                                                type: object
                                                properties:
                                                  id:
                                                    type: string
                                                    description: The SailPoint generated unique ID
                                                    example: 2c9180837dfe6949017e21f3d8cd6d49
                                                  accountId:
                                                    type: string
                                                    description: The account ID generated by the source
                                                    example: CN=Carol Adams,OU=Austin,OU=Americas,OU=Demo,DC=seri,DC=sailpointdemo,DC=com
                                        title: app
                                    appCount:
                                      type: integer
                                      format: int32
                                      description: Number of applications the identity has access to.
                                      example: 2
                                    access:
                                      type: array
                                      description: List of access items assigned to the identity.
                                      items:
                                        discriminator:
                                          propertyName: type
                                          mapping:
                                            ACCESS_PROFILE:
                                              description: This is a summary representation of an access profile.
                                              allOf:
                                                - allOf:
                                                    - allOf:
                                                        - type: object
                                                          properties:
                                                            id:
                                                              type: string
                                                              example: 2c91808568c529c60168cca6f90c1313
                                                              description: The unique ID of the referenced object.
                                                            name:
                                                              type: string
                                                              example: John Doe
                                                              description: The human readable name of the referenced object.
                                                          title: reference
                                                        - type: object
                                                          properties:
                                                            displayName:
                                                              type: string
                                                              example: John Q. Doe
                                                      title: displayreference
                                                    - type: object
                                                      properties:
                                                        description:
                                                          description: Description of access item.
                                                          type: string
                                                          nullable: true
                                                          example: null
                                                  title: access
                                                - type: object
                                                  properties:
                                                    type:
                                                      type: string
                                                      description: Type of the access item.
                                                      example: ACCESS_PROFILE
                                                    source:
                                                      type: object
                                                      properties:
                                                        id:
                                                          type: string
                                                          example: 2c91808568c529c60168cca6f90c1313
                                                          description: The unique ID of the referenced object.
                                                        name:
                                                          type: string
                                                          example: John Doe
                                                          description: The human readable name of the referenced object.
                                                      title: reference
                                                    owner:
                                                      allOf:
                                                        - type: object
                                                          properties:
                                                            id:
                                                              type: string
                                                              example: 2c91808568c529c60168cca6f90c1313
                                                              description: The unique ID of the referenced object.
                                                            name:
                                                              type: string
                                                              example: John Doe
                                                              description: The human readable name of the referenced object.
                                                          title: reference
                                                        - type: object
                                                          properties:
                                                            displayName:
                                                              type: string
                                                              example: John Q. Doe
                                                      title: displayreference
                                                    revocable:
                                                      type: boolean
                                                      example: true
                                              title: accessprofilesummary
                                            ENTITLEMENT:
                                              description: EntitlementReference
                                              allOf:
                                                - allOf:
                                                    - allOf:
                                                        - type: object
                                                          properties:
                                                            id:
                                                              type: string
                                                              example: 2c91808568c529c60168cca6f90c1313
                                                              description: The unique ID of the referenced object.
                                                            name:
                                                              type: string
                                                              example: John Doe
                                                              description: The human readable name of the referenced object.
                                                          title: reference
                                                        - type: object
                                                          properties:
                                                            displayName:
                                                              type: string
                                                              example: John Q. Doe
                                                      title: displayreference
                                                    - type: object
                                                      properties:
                                                        description:
                                                          description: Description of access item.
                                                          type: string
                                                          nullable: true
                                                          example: null
                                                  title: access
                                                - type: object
                                                  properties:
                                                    source:
                                                      type: object
                                                      properties:
                                                        id:
                                                          type: string
                                                          example: 2c91808568c529c60168cca6f90c1313
                                                          description: The unique ID of the referenced object.
                                                        name:
                                                          type: string
                                                          example: John Doe
                                                          description: The human readable name of the referenced object.
                                                      title: reference
                                                    type:
                                                      type: string
                                                      description: Type of the access item.
                                                      example: ENTITLEMENT
                                                    privileged:
                                                      type: boolean
                                                      example: false
                                                    attribute:
                                                      type: string
                                                      example: memberOf
                                                    value:
                                                      type: string
                                                      example: CN=Buyer,OU=Groups,OU=Demo,DC=seri,DC=sailpointdemo,DC=com
                                                    standalone:
                                                      type: boolean
                                                      example: false
                                              title: accessprofileentitlement
                                            ROLE:
                                              description: Role
                                              allOf:
                                                - allOf:
                                                    - allOf:
                                                        - type: object
                                                          properties:
                                                            id:
                                                              type: string
                                                              example: 2c91808568c529c60168cca6f90c1313
                                                              description: The unique ID of the referenced object.
                                                            name:
                                                              type: string
                                                              example: John Doe
                                                              description: The human readable name of the referenced object.
                                                          title: reference
                                                        - type: object
                                                          properties:
                                                            displayName:
                                                              type: string
                                                              example: John Q. Doe
                                                      title: displayreference
                                                    - type: object
                                                      properties:
                                                        description:
                                                          description: Description of access item.
                                                          type: string
                                                          nullable: true
                                                          example: null
                                                  title: access
                                                - type: object
                                                  properties:
                                                    type:
                                                      type: string
                                                      description: Type of the access item.
                                                      example: ROLE
                                                    owner:
                                                      allOf:
                                                        - type: object
                                                          properties:
                                                            id:
                                                              type: string
                                                              example: 2c91808568c529c60168cca6f90c1313
                                                              description: The unique ID of the referenced object.
                                                            name:
                                                              type: string
                                                              example: John Doe
                                                              description: The human readable name of the referenced object.
                                                          title: reference
                                                        - type: object
                                                          properties:
                                                            displayName:
                                                              type: string
                                                              example: John Q. Doe
                                                      title: displayreference
                                                    disabled:
                                                      type: boolean
                                                    revocable:
                                                      type: boolean
                                              title: accessprofilerole
                                        oneOf:
                                          - description: This is a summary representation of an access profile.
                                            allOf:
                                              - allOf:
                                                  - allOf:
                                                      - type: object
                                                        properties:
                                                          id:
                                                            type: string
                                                            example: 2c91808568c529c60168cca6f90c1313
                                                            description: The unique ID of the referenced object.
                                                          name:
                                                            type: string
                                                            example: John Doe
                                                            description: The human readable name of the referenced object.
                                                        title: reference
                                                      - type: object
                                                        properties:
                                                          displayName:
                                                            type: string
                                                            example: John Q. Doe
                                                    title: displayreference
                                                  - type: object
                                                    properties:
                                                      description:
                                                        description: Description of access item.
                                                        type: string
                                                        nullable: true
                                                        example: null
                                                title: access
                                              - type: object
                                                properties:
                                                  type:
                                                    type: string
                                                    description: Type of the access item.
                                                    example: ACCESS_PROFILE
                                                  source:
                                                    type: object
                                                    properties:
                                                      id:
                                                        type: string
                                                        example: 2c91808568c529c60168cca6f90c1313
                                                        description: The unique ID of the referenced object.
                                                      name:
                                                        type: string
                                                        example: John Doe
                                                        description: The human readable name of the referenced object.
                                                    title: reference
                                                  owner:
                                                    allOf:
                                                      - type: object
                                                        properties:
                                                          id:
                                                            type: string
                                                            example: 2c91808568c529c60168cca6f90c1313
                                                            description: The unique ID of the referenced object.
                                                          name:
                                                            type: string
                                                            example: John Doe
                                                            description: The human readable name of the referenced object.
                                                        title: reference
                                                      - type: object
                                                        properties:
                                                          displayName:
                                                            type: string
                                                            example: John Q. Doe
                                                    title: displayreference
                                                  revocable:
                                                    type: boolean
                                                    example: true
                                            title: accessprofilesummary
                                          - description: EntitlementReference
                                            allOf:
                                              - allOf:
                                                  - allOf:
                                                      - type: object
                                                        properties:
                                                          id:
                                                            type: string
                                                            example: 2c91808568c529c60168cca6f90c1313
                                                            description: The unique ID of the referenced object.
                                                          name:
                                                            type: string
                                                            example: John Doe
                                                            description: The human readable name of the referenced object.
                                                        title: reference
                                                      - type: object
                                                        properties:
                                                          displayName:
                                                            type: string
                                                            example: John Q. Doe
                                                    title: displayreference
                                                  - type: object
                                                    properties:
                                                      description:
                                                        description: Description of access item.
                                                        type: string
                                                        nullable: true
                                                        example: null
                                                title: access
                                              - type: object
                                                properties:
                                                  source:
                                                    type: object
                                                    properties:
                                                      id:
                                                        type: string
                                                        example: 2c91808568c529c60168cca6f90c1313
                                                        description: The unique ID of the referenced object.
                                                      name:
                                                        type: string
                                                        example: John Doe
                                                        description: The human readable name of the referenced object.
                                                    title: reference
                                                  type:
                                                    type: string
                                                    description: Type of the access item.
                                                    example: ENTITLEMENT
                                                  privileged:
                                                    type: boolean
                                                    example: false
                                                  attribute:
                                                    type: string
                                                    example: memberOf
                                                  value:
                                                    type: string
                                                    example: CN=Buyer,OU=Groups,OU=Demo,DC=seri,DC=sailpointdemo,DC=com
                                                  standalone:
                                                    type: boolean
                                                    example: false
                                            title: accessprofileentitlement
                                          - description: Role
                                            allOf:
                                              - allOf:
                                                  - allOf:
                                                      - type: object
                                                        properties:
                                                          id:
                                                            type: string
                                                            example: 2c91808568c529c60168cca6f90c1313
                                                            description: The unique ID of the referenced object.
                                                          name:
                                                            type: string
                                                            example: John Doe
                                                            description: The human readable name of the referenced object.
                                                        title: reference
                                                      - type: object
                                                        properties:
                                                          displayName:
                                                            type: string
                                                            example: John Q. Doe
                                                    title: displayreference
                                                  - type: object
                                                    properties:
                                                      description:
                                                        description: Description of access item.
                                                        type: string
                                                        nullable: true
                                                        example: null
                                                title: access
                                              - type: object
                                                properties:
                                                  type:
                                                    type: string
                                                    description: Type of the access item.
                                                    example: ROLE
                                                  owner:
                                                    allOf:
                                                      - type: object
                                                        properties:
                                                          id:
                                                            type: string
                                                            example: 2c91808568c529c60168cca6f90c1313
                                                            description: The unique ID of the referenced object.
                                                          name:
                                                            type: string
                                                            example: John Doe
                                                            description: The human readable name of the referenced object.
                                                        title: reference
                                                      - type: object
                                                        properties:
                                                          displayName:
                                                            type: string
                                                            example: John Q. Doe
                                                    title: displayreference
                                                  disabled:
                                                    type: boolean
                                                  revocable:
                                                    type: boolean
                                            title: accessprofilerole
                                        title: identityaccess
                                    accessCount:
                                      type: integer
                                      format: int32
                                      description: Number of access items assigned to the identity.
                                      example: 5
                                    entitlementCount:
                                      type: integer
                                      format: int32
                                      description: Number of entitlements assigned to the identity.
                                      example: 10
                                    roleCount:
                                      type: integer
                                      format: int32
                                      description: Number of roles assigned to the identity.
                                      example: 1
                                    accessProfileCount:
                                      type: integer
                                      format: int32
                                      description: Number of access profiles assigned to the identity.
                                      example: 1
                                    owns:
                                      type: array
                                      description: Access items the identity owns.
                                      items:
                                        type: object
                                        properties:
                                          sources:
                                            type: array
                                            items:
                                              type: object
                                              properties:
                                                id:
                                                  type: string
                                                  example: 2c91808568c529c60168cca6f90c1313
                                                  description: The unique ID of the referenced object.
                                                name:
                                                  type: string
                                                  example: John Doe
                                                  description: The human readable name of the referenced object.
                                              title: reference
                                          entitlements:
                                            type: array
                                            items:
                                              type: object
                                              properties:
                                                id:
                                                  type: string
                                                  example: 2c91808568c529c60168cca6f90c1313
                                                  description: The unique ID of the referenced object.
                                                name:
                                                  type: string
                                                  example: John Doe
                                                  description: The human readable name of the referenced object.
                                              title: reference
                                          accessProfiles:
                                            type: array
                                            items:
                                              type: object
                                              properties:
                                                id:
                                                  type: string
                                                  example: 2c91808568c529c60168cca6f90c1313
                                                  description: The unique ID of the referenced object.
                                                name:
                                                  type: string
                                                  example: John Doe
                                                  description: The human readable name of the referenced object.
                                              title: reference
                                          roles:
                                            type: array
                                            items:
                                              type: object
                                              properties:
                                                id:
                                                  type: string
                                                  example: 2c91808568c529c60168cca6f90c1313
                                                  description: The unique ID of the referenced object.
                                                name:
                                                  type: string
                                                  example: John Doe
                                                  description: The human readable name of the referenced object.
                                              title: reference
                                          apps:
                                            type: array
                                            items:
                                              type: object
                                              properties:
                                                id:
                                                  type: string
                                                  example: 2c91808568c529c60168cca6f90c1313
                                                  description: The unique ID of the referenced object.
                                                name:
                                                  type: string
                                                  example: John Doe
                                                  description: The human readable name of the referenced object.
                                              title: reference
                                          governanceGroups:
                                            type: array
                                            items:
                                              type: object
                                              properties:
                                                id:
                                                  type: string
                                                  example: 2c91808568c529c60168cca6f90c1313
                                                  description: The unique ID of the referenced object.
                                                name:
                                                  type: string
                                                  example: John Doe
                                                  description: The human readable name of the referenced object.
                                              title: reference
                                          fallbackApprover:
                                            type: boolean
                                            example: false
                                        title: owns
                                    ownsCount:
                                      type: integer
                                      format: int32
                                      description: Number of access items the identity owns.
                                      example: 5
                                    tags:
                                      type: array
                                      description: Tags that have been applied to the object.
                                      items:
                                        type: string
                                      example:
                                        - TAG_1
                                        - TAG_2
                                      title: tags
                                    tagsCount:
                                      type: integer
                                      format: int32
                                      description: Number of tags on the identity.
                                    visibleSegments:
                                      type: array
                                      description: List of segments that the identity is in.
                                      items:
                                        type: string
                                      nullable: true
                                      example:
                                        - All Employees
                                    visibleSegmentCount:
                                      type: integer
                                      format: int32
                                      description: Number of segments the identity is in.
                                      example: 1
                              title: identitydocument
                            - type: object
                              properties:
                                pod:
                                  type: string
                                  example: pod01-useast1
                                  description: Name of the pod.
                                org:
                                  type: string
                                  example: org-name
                                  description: Name of the tenant.
                                _type:
                                  description: |-
                                    Enum representing the currently supported document types.

                                    Additional values may be added in the future without notice.
                                  type: string
                                  enum:
                                    - accessprofile
                                    - accountactivity
                                    - entitlement
                                    - event
                                    - identity
                                    - role
                                  example: identity
                                  title: documenttype
                                type:
                                  description: |-
                                    Enum representing the currently supported document types.

                                    Additional values may be added in the future without notice.
                                  type: string
                                  enum:
                                    - accessprofile
                                    - accountactivity
                                    - entitlement
                                    - event
                                    - identity
                                    - role
                                  example: identity
                                  title: documenttype
                                _index:
                                  type: string
                                  example: '44'
                                  description: Internal metadata field. This field is for SailPoint internal use only and is subject to change without notice. Do not rely on it in your integrations.
                              title: documentfields
                          title: identitydocuments
                        - type: object
                          allOf:
                            - description: Role
                              allOf:
                                - type: object
                                  properties:
                                    description:
                                      type: string
                                      description: Access item's description.
                                      example: Admin access
                                    created:
                                      type: string
                                      description: ISO-8601 date-time referring to the time when the object was created.
                                      nullable: true
                                      format: date-time
                                      example: '2018-06-25T20:22:28.104Z'
                                    modified:
                                      type: string
                                      description: ISO-8601 date-time referring to the time when the object was last modified.
                                      nullable: true
                                      format: date-time
                                      example: '2018-06-25T20:22:28.104Z'
                                    synced:
                                      type: string
                                      description: |-
                                        ISO-8601 date-time referring to the date-time when object was queued to be synced into search database for use in the search API.  
                                        This date-time changes anytime there is an update to the object, which triggers a synchronization event being sent to the search database. 
                                        There may be some delay between the `synced` time and the time when the updated data is actually available in the search API. 
                                      nullable: true
                                      format: date-time
                                      example: '2018-06-25T20:22:33.104Z'
                                    enabled:
                                      type: boolean
                                      description: Indicates whether the access item is currently enabled.
                                      default: false
                                      example: true
                                    requestable:
                                      type: boolean
                                      description: Indicates whether the access item can be requested.
                                      default: true
                                      example: true
                                    requestCommentsRequired:
                                      type: boolean
                                      description: Indicates whether comments are required for requests to access the item.
                                      default: false
                                      example: false
                                    owner:
                                      type: object
                                      description: Owner's identity.
                                      properties:
                                        type:
                                          type: string
                                          description: Owner's DTO type.
                                          enum:
                                            - IDENTITY
                                          example: IDENTITY
                                        id:
                                          type: string
                                          description: Owner's identity ID.
                                          example: 2c9180a46faadee4016fb4e018c20639
                                        name:
                                          type: string
                                          description: Owner's display name.
                                          example: Support
                                        email:
                                          type: string
                                          description: Owner's email.
                                          example: cloud-support@sailpoint.com
                                  title: baseaccess
                                - type: object
                                  required:
                                    - id
                                    - name
                                  properties:
                                    id:
                                      type: string
                                      example: 2c91808375d8e80a0175e1f88a575222
                                      description: ID of the role.
                                    name:
                                      type: string
                                      example: Branch Manager Access
                                      description: Name of the role.
                                    accessProfiles:
                                      type: array
                                      description: Access profiles included with the role.
                                      nullable: true
                                      items:
                                        type: object
                                        properties:
                                          id:
                                            type: string
                                            example: 2c91809c6faade77016fb4f0b63407ae
                                            description: Access profile's unique ID.
                                          name:
                                            type: string
                                            example: Admin Access
                                            description: Access profile's display name.
                                        title: baseaccessprofile
                                    accessProfileCount:
                                      type: integer
                                      description: Number of access profiles included with the role.
                                      nullable: true
                                      format: int32
                                      example: 1
                                    tags:
                                      type: array
                                      description: Tags that have been applied to the object.
                                      items:
                                        type: string
                                      example:
                                        - TAG_1
                                        - TAG_2
                                      title: tags
                                      nullable: true
                                    segments:
                                      type: array
                                      description: Segments with the role.
                                      nullable: true
                                      items:
                                        type: object
                                        properties:
                                          id:
                                            type: string
                                            example: b009b6e3-b56d-41d9-8735-cb532ea0b017
                                            description: Segment's unique ID.
                                          name:
                                            type: string
                                            example: Test Segment
                                            description: Segment's display name.
                                        title: basesegment
                                    segmentCount:
                                      type: integer
                                      description: Number of segments with the role.
                                      nullable: true
                                      format: int32
                                      example: 1
                                    entitlements:
                                      type: array
                                      description: Entitlements included with the role.
                                      nullable: true
                                      items:
                                        allOf:
                                          - type: object
                                            properties:
                                              hasPermissions:
                                                type: boolean
                                                description: Indicates whether the entitlement has permissions.
                                                default: false
                                                example: false
                                              description:
                                                type: string
                                                description: Entitlement's description.
                                                nullable: true
                                                example: Cloud engineering
                                              attribute:
                                                type: string
                                                description: Entitlement attribute's name.
                                                example: memberOf
                                              value:
                                                type: string
                                                description: Entitlement's value.
                                                example: CN=Cloud Engineering,DC=sailpoint,DC=COM
                                              schema:
                                                type: string
                                                description: Entitlement's schema.
                                                example: group
                                              privileged:
                                                type: boolean
                                                description: Indicates whether the entitlement is privileged.
                                                default: false
                                                example: false
                                              id:
                                                type: string
                                                description: Entitlement's ID.
                                                example: 2c918084575812550157589064f33b89
                                              name:
                                                type: string
                                                description: Entitlement's name.
                                                example: CN=Cloud Engineering,DC=sailpoint,DC=COM
                                            title: baseentitlement
                                          - properties:
                                              sourceSchemaObjectType:
                                                type: string
                                                description: Schema objectType.
                                                example: group
                                              hash:
                                                type: string
                                                description: Read-only calculated hash value of an entitlement.
                                                example: c6fab95235584cca98a454a2f51e5683bc77d6a0
                                    entitlementCount:
                                      type: integer
                                      description: Number of entitlements included with the role.
                                      nullable: true
                                      format: int32
                                      example: 3
                                    dimensional:
                                      type: boolean
                                      example: false
                                      default: false
                                    dimensionSchemaAttributeCount:
                                      type: integer
                                      description: Number of dimension attributes included with the role.
                                      nullable: true
                                      format: int32
                                      example: 3
                                    dimensionSchemaAttributes:
                                      type: array
                                      description: Dimension attributes included with the role.
                                      nullable: true
                                      items:
                                        type: object
                                        properties:
                                          derived:
                                            type: boolean
                                            example: true
                                            default: true
                                          displayName:
                                            type: string
                                            description: Displayname of the dimension attribute.
                                            example: Department
                                          name:
                                            type: string
                                            description: Name of the dimension attribute.
                                            example: department
                                    dimensions:
                                      type: array
                                      nullable: true
                                      items:
                                        type: object
                                        properties:
                                          id:
                                            type: string
                                            description: Unique ID of the dimension.
                                            example: b3c28992ba964a40a7598978139d1ced
                                          name:
                                            type: string
                                            description: Name of the dimension.
                                            example: Manager Austin Branch
                                          description:
                                            type: string
                                            nullable: true
                                            description: Description of the dimension.
                                            example: Managers located at the Austin branch
                                          entitlements:
                                            type: array
                                            description: Entitlements included with the role.
                                            nullable: true
                                            items:
                                              allOf:
                                                - type: object
                                                  properties:
                                                    hasPermissions:
                                                      type: boolean
                                                      description: Indicates whether the entitlement has permissions.
                                                      default: false
                                                      example: false
                                                    description:
                                                      type: string
                                                      description: Entitlement's description.
                                                      nullable: true
                                                      example: Cloud engineering
                                                    attribute:
                                                      type: string
                                                      description: Entitlement attribute's name.
                                                      example: memberOf
                                                    value:
                                                      type: string
                                                      description: Entitlement's value.
                                                      example: CN=Cloud Engineering,DC=sailpoint,DC=COM
                                                    schema:
                                                      type: string
                                                      description: Entitlement's schema.
                                                      example: group
                                                    privileged:
                                                      type: boolean
                                                      description: Indicates whether the entitlement is privileged.
                                                      default: false
                                                      example: false
                                                    id:
                                                      type: string
                                                      description: Entitlement's ID.
                                                      example: 2c918084575812550157589064f33b89
                                                    name:
                                                      type: string
                                                      description: Entitlement's name.
                                                      example: CN=Cloud Engineering,DC=sailpoint,DC=COM
                                                  title: baseentitlement
                                                - properties:
                                                    sourceSchemaObjectType:
                                                      type: string
                                                      description: Schema objectType.
                                                      example: group
                                                    hash:
                                                      type: string
                                                      description: Read-only calculated hash value of an entitlement.
                                                      example: c6fab95235584cca98a454a2f51e5683bc77d6a0
                                          accessProfiles:
                                            type: array
                                            nullable: true
                                            description: Access profiles included in the dimension.
                                            items:
                                              type: object
                                              properties:
                                                id:
                                                  type: string
                                                  example: 2c91809c6faade77016fb4f0b63407ae
                                                  description: Access profile's unique ID.
                                                name:
                                                  type: string
                                                  example: Admin Access
                                                  description: Access profile's display name.
                                              title: baseaccessprofile
                              title: roledocument
                            - type: object
                              properties:
                                pod:
                                  type: string
                                  example: pod01-useast1
                                  description: Name of the pod.
                                org:
                                  type: string
                                  example: org-name
                                  description: Name of the tenant.
                                _type:
                                  description: |-
                                    Enum representing the currently supported document types.

                                    Additional values may be added in the future without notice.
                                  type: string
                                  enum:
                                    - accessprofile
                                    - accountactivity
                                    - entitlement
                                    - event
                                    - identity
                                    - role
                                  example: identity
                                  title: documenttype
                                type:
                                  description: |-
                                    Enum representing the currently supported document types.

                                    Additional values may be added in the future without notice.
                                  type: string
                                  enum:
                                    - accessprofile
                                    - accountactivity
                                    - entitlement
                                    - event
                                    - identity
                                    - role
                                  example: identity
                                  title: documenttype
                                _index:
                                  type: string
                                  example: '44'
                                  description: Internal metadata field. This field is for SailPoint internal use only and is subject to change without notice. Do not rely on it in your integrations.
                              title: documentfields
                          title: roledocuments
                      title: searchdocuments
                title: aggregationresult
            text/csv:
              schema:
                description: |
                  If the *Accept:text/csv* header is specified and the *aggregationType* parameter in the request body is *SAILPOINT*,

                  the aggregation result will be returned as a CSV document.
                type: string
                example:
                  - Identity Locations,Count
                  - Munich,23
                  - Brussels,26
                  - Singapore,22
                  - Tokyo,20
                  - Taipei,16
                  - London,64
                  - Austin,109
                  - Sao Paulo,24
                  - San Jose,27
                title: aggregationresult-csv
          headers:
            X-Total-Count:
              description: The total result count (returned only if the *count* parameter is specified as *true*).
              schema:
                type: integer
              example: 5
        '400':
          description: Client Error - Returned if the request body is invalid.
          content:
            application/json:
              schema:
                type: object
                title: Error Response Dto
                properties:
                  detailCode:
                    type: string
                    description: Fine-grained error code providing more detail of the error.
                    example: 400.1 Bad Request Content
                  trackingId:
                    type: string
                    description: Unique tracking id for the error.
                    example: e7eab60924f64aa284175b9fa3309599
                  messages:
                    type: array
                    description: Generic localized reason for error
                    items:
                      type: object
                      title: Error Message Dto
                      properties:
                        locale:
                          type: string
                          description: The locale for the message text, a BCP 47 language tag.
                          example: en-US
                          nullable: true
                        localeOrigin:
                          type: string
                          enum:
                            - DEFAULT
                            - REQUEST
                            - null
                          description: An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.
                          example: DEFAULT
                          nullable: true
                          title: localeorigin
                        text:
                          type: string
                          description: Actual text of the error message in the indicated locale.
                          example: The request was syntactically correct but its content is semantically invalid.
                  causes:
                    type: array
                    description: Plain-text descriptive reasons to provide additional detail to the text provided in the messages field
                    items:
                      type: object
                      title: Error Message Dto
                      properties:
                        locale:
                          type: string
                          description: The locale for the message text, a BCP 47 language tag.
                          example: en-US
                          nullable: true
                        localeOrigin:
                          type: string
                          enum:
                            - DEFAULT
                            - REQUEST
                            - null
                          description: An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.
                          example: DEFAULT
                          nullable: true
                          title: localeorigin
                        text:
                          type: string
                          description: Actual text of the error message in the indicated locale.
                          example: The request was syntactically correct but its content is semantically invalid.
        '401':
          description: Unauthorized - Returned if there is no authorization header, or if the JWT token is expired.
          content:
            application/json:
              schema:
                type: object
                properties:
                  error:
                    description: A message describing the error
                    example: 'JWT validation failed: JWT is expired'
        '403':
          description: Forbidden - Returned if the user you are running as, doesn't have access to this end-point.
          content:
            application/json:
              schema:
                type: object
                title: Error Response Dto
                properties:
                  detailCode:
                    type: string
                    description: Fine-grained error code providing more detail of the error.
                    example: 400.1 Bad Request Content
                  trackingId:
                    type: string
                    description: Unique tracking id for the error.
                    example: e7eab60924f64aa284175b9fa3309599
                  messages:
                    type: array
                    description: Generic localized reason for error
                    items:
                      type: object
                      title: Error Message Dto
                      properties:
                        locale:
                          type: string
                          description: The locale for the message text, a BCP 47 language tag.
                          example: en-US
                          nullable: true
                        localeOrigin:
                          type: string
                          enum:
                            - DEFAULT
                            - REQUEST
                            - null
                          description: An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.
                          example: DEFAULT
                          nullable: true
                          title: localeorigin
                        text:
                          type: string
                          description: Actual text of the error message in the indicated locale.
                          example: The request was syntactically correct but its content is semantically invalid.
                  causes:
                    type: array
                    description: Plain-text descriptive reasons to provide additional detail to the text provided in the messages field
                    items:
                      type: object
                      title: Error Message Dto
                      properties:
                        locale:
                          type: string
                          description: The locale for the message text, a BCP 47 language tag.
                          example: en-US
                          nullable: true
                        localeOrigin:
                          type: string
                          enum:
                            - DEFAULT
                            - REQUEST
                            - null
                          description: An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.
                          example: DEFAULT
                          nullable: true
                          title: localeorigin
                        text:
                          type: string
                          description: Actual text of the error message in the indicated locale.
                          example: The request was syntactically correct but its content is semantically invalid.
              examples:
                '403':
                  summary: An example of a 403 response object
                  value:
                    detailCode: 403 Forbidden
                    trackingId: b21b1f7ce4da4d639f2c62a57171b427
                    messages:
                      - locale: en-US
                        localeOrigin: DEFAULT
                        text: The server understood the request but refuses to authorize it.
        '429':
          description: Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again.
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
                    description: A message describing the error
                    example: ' Rate Limit Exceeded '
        '500':
          description: Internal Server Error - Returned if there is an unexpected error.
          content:
            application/json:
              schema:
                type: object
                title: Error Response Dto
                properties:
                  detailCode:
                    type: string
                    description: Fine-grained error code providing more detail of the error.
                    example: 400.1 Bad Request Content
                  trackingId:
                    type: string
                    description: Unique tracking id for the error.
                    example: e7eab60924f64aa284175b9fa3309599
                  messages:
                    type: array
                    description: Generic localized reason for error
                    items:
                      type: object
                      title: Error Message Dto
                      properties:
                        locale:
                          type: string
                          description: The locale for the message text, a BCP 47 language tag.
                          example: en-US
                          nullable: true
                        localeOrigin:
                          type: string
                          enum:
                            - DEFAULT
                            - REQUEST
                            - null
                          description: An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.
                          example: DEFAULT
                          nullable: true
                          title: localeorigin
                        text:
                          type: string
                          description: Actual text of the error message in the indicated locale.
                          example: The request was syntactically correct but its content is semantically invalid.
                  causes:
                    type: array
                    description: Plain-text descriptive reasons to provide additional detail to the text provided in the messages field
                    items:
                      type: object
                      title: Error Message Dto
                      properties:
                        locale:
                          type: string
                          description: The locale for the message text, a BCP 47 language tag.
                          example: en-US
                          nullable: true
                        localeOrigin:
                          type: string
                          enum:
                            - DEFAULT
                            - REQUEST
                            - null
                          description: An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.
                          example: DEFAULT
                          nullable: true
                          title: localeorigin
                        text:
                          type: string
                          description: Actual text of the error message in the indicated locale.
                          example: The request was syntactically correct but its content is semantically invalid.
              examples:
                '500':
                  summary: An example of a 500 response object
                  value:
                    detailCode: 500.0 Internal Fault
                    trackingId: b21b1f7ce4da4d639f2c62a57171b427
                    messages:
                      - locale: en-US
                        localeOrigin: DEFAULT
                        text: An internal fault occurred.
components:
  securitySchemes:
    userAuth:
      type: oauth2
      x-displayName: Personal Access Token
      description: |
        OAuth2 Bearer token (JWT) generated using either a [personal access token (PAT)](https://developer.sailpoint.com/docs/api/authentication/#generate-a-personal-access-token) or through the [authorization code flow](https://developer.sailpoint.com/docs/api/authentication/#request-access-token-with-authorization-code-grant-flow).

        Personal access tokens are associated with a user in Identity Security Cloud and relies on the user's [user level](https://documentation.sailpoint.com/saas/help/common/users/index.html) (ex. Admin, Helpdesk, etc.) to determine a base level of access.

        See [Identity Security Cloud REST API Authentication](https://developer.sailpoint.com/docs/api/authentication/) for more information.
      flows:
        clientCredentials:
          tokenUrl: https://example-tenant.api.identitynow.com/oauth/token
          scopes:
            sp:scopes:default: default scope
            sp:scopes:all: access to all scopes
        authorizationCode:
          authorizationUrl: https://example-tenant.login.sailpoint.com/oauth/authorize
          tokenUrl: https://example-tenant.api.identitynow.com/oauth/token
          scopes:
            sp:scopes:default: default scope
            sp:scopes:all: access to all scopes
    applicationAuth:
      type: oauth2
      x-displayName: Client Credentials
      description: |
        OAuth2 Bearer token (JWT) generated using [client credentials flow](https://developer.sailpoint.com/docs/api/authentication/#request-access-token-with-client-credentials-grant-flow).

        Client credentials refers to tokens that are not associated with a user in Identity Security Cloud.

        See [Identity Security Cloud REST API Authentication](https://developer.sailpoint.com/docs/api/authentication/) for more information.
      flows:
        clientCredentials:
          tokenUrl: https://example-tenant.api.identitynow.com/oauth/token
          scopes:
            sp:scopes:default: default scope
            sp:scopes:all: access to all scopes
```
