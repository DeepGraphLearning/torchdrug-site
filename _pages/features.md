---
title: Features
layout: page
permalink: /features
---

# Minimal Domain Knowledge

Targeted at the machine learning community, TorchDrug abstracts away most domain
knowledge and provides a tensor-based interface. It allows you to manipulate
biomedical objects using tensor algebra and machine learning operations.

```python
mol = data.Molecule.from_smiles("C1=CC=CC=C1", node_feature="default")
model = models.GIN(input_dim=mol.node_feature.shape[-1], hidden_dims=[128, 128])
output = model(mol, mol.node_feature.float())
```

# Datasets and Building Blocks

With a large collection of datasets and building blocks, it is easy to implement standard
models in TorchDrug without writing boilerplate code. The building blocks are also
highly extensible to facilitate exploration of model designs.

```python
qm9 = datasets.QM9("~/molecule-datasets")
model = layers.Sequential(
	layers.GCNConv(qm9.node_feature_dim, 128),
	layers.GCNConv(128, 128),
	layers.SumReadout(),
	global_args=("graph",)
)
mol = qm9[0]["graph"]
feature = model(mol, mol.node_feature.float())
```

# Comprehensive Benchmarks

Comprehensive benchmarks have been conducted on several drug discovery tasks to provide a
systematic comparison of popular deep learning architectures. The [benchmark results] are 
expected to track the progress of new models and inspire new research directions.

[benchmark results]: {{ "/docs/benchmark" | relative_url }}

# Scalable Training and Inference

Designed to be scalable, TorchDrug accelerates training and inference over multiple CPUs
or GPUs. With a line of code, the library allows you to seamlessly switch between CPUs, GPUs
or even distributed settings.

```python
...
# CPU
solver = core.Engine(task, train_set, valid_set, test_set, optimizer)
# Single GPU
solver = core.Engine(task, train_set, valid_set, test_set, optimizer, gpus=[0])
# Multiple GPU
solver = core.Engine(task, train_set, valid_set, test_set, optimizer, gpus=[0, 1, 2, 3])
```