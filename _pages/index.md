---
layout: landing
permalink: /
title:
landing:
  title: A powerful and flexible machine learning platform for drug discovery
  excerpt: > 
    TorchDrug is a machine learning platform designed for drug discovery, covering techniques from graph machine learning (graph neural networks, geometric deep learning & knowledge graphs), deep generative models to reinforcement learning. It provides a comprehensive and flexible interface to support rapid prototyping of drug discovery models in PyTorch.

grid:
  title: Key Features
  items:
    - title: Minimal Domain Knowledge
      excerpt: >
        Build and train machine learning models for drug discovery with minimal domain knowledge.
    - title: Datasets and Building Blocks
      excerpt: >
        Empower fast iteration of ideas by a large collection of common datasets and building blocks.
    - title: Comprehensive Benchmarks
      excerpt: >
        Benchmarks provide a systematic comparison of deep learning architectures for drug discovery.
    - title: Scalable Training and Inference
      excerpt: >
        Seamlessly scale models to multiple CPUs, multiple GPUs, or even distributed settings.
  btn_label: View all features
  url: features

image_grid:
  title: Solutions to Drug Discovery Tasks
  items:
    - title: Property Prediction
      url: https://colab.research.google.com/drive/1sb2w3evdEWm-GYo28RksvzJ74p63xHMn?usp=sharing#forceEdit=true&sandboxMode=true
      image: assets/images/task/property_prediction.png
    - title: Pretrained Molecular Representations
      url: https://colab.research.google.com/drive/10faCIVIfln20f2h1oQk2UrXiAMqZKLoW?usp=sharing#forceEdit=true&sandboxMode=true
      image: assets/images/task/pretrain.png
    - title: De Novo Molecule Design & Optimization
      url: https://colab.research.google.com/drive/1JEMiMvSBuqCuzzREYpviNZZRVOYsgivA?usp=sharing#forceEdit=true&sandboxMode=true
      image: assets/images/task/generation.png
    - title: Reaction Prediction & Retrosynthesis
      url: https://colab.research.google.com/drive/1IH1hk7K3MaxAEe5m6CFY7Eyej3RuiEL1?usp=sharing#forceEdit=true&sandboxMode=true
      image: assets/images/task/retrosynthesis.png
    - title: Biomedical Knowledge Graph Reasoning
      url: https://colab.research.google.com/drive/1-sjqQZhYrGM0HiMuaqXOiqhDNlJi7g_I?usp=sharing#forceEdit=true&sandboxMode=true
      image: assets/images/task/reasoning.png
    - title: Protein Representation Learning
      url: https://torchprotein.ai/
      image: assets/images/task/protein.png

intro_box: "pip install torchdrug"
intro_image: "assets/images/intro.svg"
intro_image_absolute: true
intro_image_hide_on_mobile: true
---

{% include grid.html id="grid" %}

{% include image-grid.html id="image_grid" %}
