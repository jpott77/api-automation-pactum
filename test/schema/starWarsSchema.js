module.exports ={
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "$id": "http://example.com/example.json",
    "type": "object",
    "default": {},
    "title": "Root Schema",
    "required": [
        "data"
    ],
    "properties": {
        "data": {
            "type": "object",
            "default": {},
            "title": "The data Schema",
            "required": [
                "allFilms",
                "allPeople"
            ],
            "properties": {
                "allFilms": {
                    "type": "object",
                    "default": {},
                    "title": "The allFilms Schema",
                    "required": [
                        "films"
                    ],
                    "properties": {
                        "films": {
                            "type": "array",
                            "default": [],
                            "title": "The films Schema",
                            "items": {
                                "type": "object",
                                "title": "A Schema",
                                "required": [
                                    "title"
                                ],
                                "properties": {
                                    "title": {
                                        "type": "string",
                                        "title": "The title Schema",
                                        "examples": [
                                            "A New Hope",
                                            "The Empire Strikes Back"
                                        ]
                                    }
                                },
                                "examples": [{
                                    "title": "A New Hope"
                                },
                                {
                                    "title": "The Empire Strikes Back"
                                }]
                            },
                            "examples": [
                                [{
                                    "title": "A New Hope"
                                },
                                {
                                    "title": "The Empire Strikes Back"
                                }]
                            ]
                        }
                    },
                    "examples": [{
                        "films": [{
                            "title": "A New Hope"
                        },
                        {
                            "title": "The Empire Strikes Back"
                        }]
                    }]
                },
                "allPeople": {
                    "type": "object",
                    "default": {},
                    "title": "The allPeople Schema",
                    "required": [
                        "people"
                    ],
                    "properties": {
                        "people": {
                            "type": "array",
                            "default": [],
                            "title": "The people Schema",
                            "items": {
                                "type": "object",
                                "title": "A Schema",
                                "required": [
                                    "homeworld",
                                    "name",
                                    "species"
                                ],
                                "properties": {
                                    "homeworld": {
                                        "type": "object",
                                        "title": "The homeworld Schema",
                                        "required": [
                                            "name"
                                        ],
                                        "properties": {
                                            "name": {
                                                "type": "string",
                                                "title": "The name Schema",
                                                "examples": [
                                                    "Tatooine"
                                                ]
                                            }
                                        },
                                        "examples": [{
                                            "name": "Tatooine"
                                        },
                                        {
                                            "name": "Tatooine"
                                        }]
                                    },
                                    "name": {
                                        "type": "string",
                                        "title": "The name Schema",
                                        "examples": [
                                            "Luke Skywalker",
                                            "C-3PO"
                                        ]
                                    },
                                    "species": {
                                        "type": [
                                            "null",
                                            "object"
                                        ],
                                        "title": "The species Schema",
                                        "required": [
                                            "name"
                                        ],
                                        "properties": {
                                            "name": {
                                                "type": "string",
                                                "default": "",
                                                "title": "The name Schema",
                                                "examples": [
                                                    "Droid"
                                                ]
                                            }
                                        },
                                        "examples": [
                                            null,
                                            {
                                                "name": "Droid"
                                            }
                                        ]
                                    }
                                },
                                "examples": [{
                                    "homeworld": {
                                        "name": "Tatooine"
                                    },
                                    "name": "Luke Skywalker",
                                    "species": null
                                },
                                {
                                    "homeworld": {
                                        "name": "Tatooine"
                                    },
                                    "name": "C-3PO",
                                    "species": {
                                        "name": "Droid"
                                    }
                                }]
                            },
                            "examples": [
                                [{
                                    "homeworld": {
                                        "name": "Tatooine"
                                    },
                                    "name": "Luke Skywalker",
                                    "species": null
                                },
                                {
                                    "homeworld": {
                                        "name": "Tatooine"
                                    },
                                    "name": "C-3PO",
                                    "species": {
                                        "name": "Droid"
                                    }
                                }]
                            ]
                        }
                    },
                    "examples": [{
                        "people": [{
                            "homeworld": {
                                "name": "Tatooine"
                            },
                            "name": "Luke Skywalker",
                            "species": null
                        },
                        {
                            "homeworld": {
                                "name": "Tatooine"
                            },
                            "name": "C-3PO",
                            "species": {
                                "name": "Droid"
                            }
                        }]
                    }]
                }
            },
            "examples": [{
                "allFilms": {
                    "films": [{
                        "title": "A New Hope"
                    },
                    {
                        "title": "The Empire Strikes Back"
                    }]
                },
                "allPeople": {
                    "people": [{
                        "homeworld": {
                            "name": "Tatooine"
                        },
                        "name": "Luke Skywalker",
                        "species": null
                    },
                    {
                        "homeworld": {
                            "name": "Tatooine"
                        },
                        "name": "C-3PO",
                        "species": {
                            "name": "Droid"
                        }
                    }]
                }
            }]
        }
    },
    "examples": [{
        "data": {
            "allFilms": {
                "films": [{
                    "title": "A New Hope"
                },
                {
                    "title": "The Empire Strikes Back"
                }]
            },
            "allPeople": {
                "people": [{
                    "homeworld": {
                        "name": "Tatooine"
                    },
                    "name": "Luke Skywalker",
                    "species": null
                },
                {
                    "homeworld": {
                        "name": "Tatooine"
                    },
                    "name": "C-3PO",
                    "species": {
                        "name": "Droid"
                    }
                }]
            }
        }
    }]
}