---
layout: landing
permalink: /
title:
landing:
  title: Powerful and flexible machine learning library for drug discovery
  excerpt: > 
    TorchDrug is a graph representation learning toolbox built on top of PyTorch.
    It provides a comprehensive and flexible interface to support rapid protoyping of machine learning models for drug discovery.

grid:
  items:
    - title: Minimal Domain Knowledge
      excerpt: >
        Build and train machine learning models for drug discovery with minimal domain knowledge.
    - title: Datasets and Building Blocks
      excerpt: >
        Empower fast iteration of ideas by a large collection of datasets and building blocks.
    - title: Comprehensive Benchmarks
      excerpt: >
        Benchmarks provide a systematic comparison of deep learning architectures for drug discovery.
    - title: Scalable Training and Inference
      excerpt: >
        Seamlessly scale models to multiple CPUs and GPUs, or even distributed settings.
  btn_label: View all features
  url: features

image_grid:
  - title: Property Prediction
    url: /docs/tutorials/property_prediction
    image: assets/images/task/property_prediction.png
  - title: Pretrained Molecular Representations
    url: /docs/tutorials/pretrained_representation
    image: assets/images/task/pretrain.png
  - title: De Novo Molecule Design & Optimization
    url: /docs/tutorials/generation
    image: assets/images/task/generation.png
  - title: Retrosynthesis
    url: /docs/tutorials/retrosynthesis
    image: assets/images/task/retrosynthesis.png
  - title: Biomedical Knowledge Graph Reasoning
    url: /docs/tutorials/reasoning
    image: assets/images/task/reasoning.png

intro_box: "conda install torchdrug"
intro_image: "assets/images/intro.svg"
intro_image_absolute: true
intro_image_hide_on_mobile: true
---

# Key Features

{% include grid.html id="grid" %}

# Solutions to drug discovery tasks

{% include image-grid.html id="image_grid" %}