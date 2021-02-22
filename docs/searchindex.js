Search.setIndex({docnames:["api/core","api/data","api/datasets","api/index","api/layers","api/metrics","api/models","api/tasks","benchmark/generation","benchmark/index","benchmark/pretrain","benchmark/property_prediction","benchmark/reasoning","benchmark/retrosynthesis","bibliography","index","installation","notes/debug","notes/extension","notes/graph","notes/index","notes/layer","notes/variadic","quick_start","tutorials/generation","tutorials/index","tutorials/pretrain","tutorials/property_prediction","tutorials/reasoning","tutorials/retrosynthesis"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":3,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":2,"sphinx.domains.rst":2,"sphinx.domains.std":1,"sphinx.ext.viewcode":1,sphinx:56},filenames:["api/core.rst","api/data.rst","api/datasets.rst","api/index.rst","api/layers.rst","api/metrics.rst","api/models.rst","api/tasks.rst","benchmark/generation.rst","benchmark/index.rst","benchmark/pretrain.rst","benchmark/property_prediction.rst","benchmark/reasoning.rst","benchmark/retrosynthesis.rst","bibliography.rst","index.rst","installation.rst","notes/debug.rst","notes/extension.rst","notes/graph.rst","notes/index.rst","notes/layer.rst","notes/variadic.rst","quick_start.rst","tutorials/generation.rst","tutorials/index.rst","tutorials/pretrain.rst","tutorials/property_prediction.rst","tutorials/reasoning.rst","tutorials/retrosynthesis.rst"],objects:{"drugdiscovery.core":{Configurable:[0,1,1,""],Engine:[0,1,1,""],Meter:[0,1,1,""],Registry:[0,1,1,""],_MetaContainer:[0,1,1,""]},"drugdiscovery.core.Engine":{config_dict:[0,2,1,""],epoch:[0,2,1,""],evaluate:[0,2,1,""],load:[0,2,1,""],load_config_dict:[0,2,1,""],save:[0,2,1,""],train:[0,2,1,""]},"drugdiscovery.core.Meter":{log:[0,2,1,""],step:[0,2,1,""],update:[0,2,1,""]},"drugdiscovery.core.Registry":{get:[0,2,1,""],register:[0,2,1,""],search:[0,2,1,""]},"drugdiscovery.core._MetaContainer":{context:[0,2,1,""],data_by_meta:[0,2,1,""],data_dict:[0,2,1,""]},"drugdiscovery.data":{DataLoader:[1,1,1,""],Graph:[1,1,1,""],KnowledgeGraphDataset:[1,1,1,""],Molecule:[1,1,1,""],MoleculeDataset:[1,1,1,""],PackedGraph:[1,1,1,""],PackedMolecule:[1,1,1,""],ReactionDataset:[1,1,1,""],feature:[1,0,0,"-"],graph_collate:[1,4,1,""],ordered_scaffold_split:[1,4,1,""],scaffold_split:[1,4,1,""],semisupervised:[1,4,1,""]},"drugdiscovery.data.Graph":{batch_size:[1,2,1,""],compact:[1,2,1,""],connected_components:[1,2,1,""],context:[1,2,1,""],cpu:[1,2,1,""],cuda:[1,2,1,""],data_by_meta:[1,2,1,""],data_dict:[1,2,1,""],device:[1,2,1,""],edge2graph:[1,2,1,""],edge:[1,2,1,""],edge_list:[1,2,1,""],edge_mask:[1,2,1,""],edge_weight:[1,2,1,""],from_dense:[1,2,1,""],full:[1,2,1,""],get_edge:[1,2,1,""],graph:[1,2,1,""],index:[1,2,1,""],node2graph:[1,2,1,""],node:[1,2,1,""],node_mask:[1,2,1,""],pack:[1,2,1,""],packed_type:[1,3,1,""],repeat:[1,2,1,""],split:[1,2,1,""],subgraph:[1,2,1,""],visualize:[1,2,1,""]},"drugdiscovery.data.KnowledgeGraphDataset":{load_tsv:[1,2,1,""],load_tsvs:[1,2,1,""]},"drugdiscovery.data.Molecule":{batch_size:[1,2,1,""],compact:[1,2,1,""],connected_components:[1,2,1,""],context:[1,2,1,""],cpu:[1,2,1,""],cuda:[1,2,1,""],data_by_meta:[1,2,1,""],data_dict:[1,2,1,""],device:[1,2,1,""],edge2graph:[1,2,1,""],edge:[1,2,1,""],edge_list:[1,2,1,""],edge_mask:[1,2,1,""],edge_weight:[1,2,1,""],from_dense:[1,2,1,""],from_molecule:[1,2,1,""],from_smiles:[1,2,1,""],full:[1,2,1,""],get_edge:[1,2,1,""],graph:[1,2,1,""],index:[1,2,1,""],ion_to_molecule:[1,2,1,""],node2graph:[1,2,1,""],node:[1,2,1,""],node_mask:[1,2,1,""],num_atom:[1,2,1,""],num_bond:[1,2,1,""],pack:[1,2,1,""],packed_type:[1,3,1,""],repeat:[1,2,1,""],split:[1,2,1,""],subgraph:[1,2,1,""],to_molecule:[1,2,1,""],to_scaffold:[1,2,1,""],to_smiles:[1,2,1,""],visualize:[1,2,1,""]},"drugdiscovery.data.MoleculeDataset":{edge_feature_dim:[1,2,1,""],load_csv:[1,2,1,""],load_smiles:[1,2,1,""],node_feature_dim:[1,2,1,""],num_atom_type:[1,2,1,""],num_bond_type:[1,2,1,""],tasks:[1,2,1,""]},"drugdiscovery.data.PackedGraph":{batch_size:[1,2,1,""],compact:[1,2,1,""],connected_components:[1,2,1,""],context:[1,2,1,""],cpu:[1,2,1,""],cuda:[1,2,1,""],data_by_meta:[1,2,1,""],data_dict:[1,2,1,""],device:[1,2,1,""],edge:[1,2,1,""],edge_list:[1,2,1,""],edge_mask:[1,2,1,""],edge_weight:[1,2,1,""],from_dense:[1,2,1,""],full:[1,2,1,""],get_edge:[1,2,1,""],get_item:[1,2,1,""],graph:[1,2,1,""],graph_mask:[1,2,1,""],index:[1,2,1,""],merge:[1,2,1,""],node:[1,2,1,""],node_mask:[1,2,1,""],pack:[1,2,1,""],packed_type:[1,3,1,""],repeat:[1,2,1,""],split:[1,2,1,""],subbatch:[1,2,1,""],subgraph:[1,2,1,""],unpack:[1,2,1,""],unpack_data:[1,2,1,""],unpacked_type:[1,3,1,""],visualize:[1,2,1,""]},"drugdiscovery.data.PackedMolecule":{batch_size:[1,2,1,""],compact:[1,2,1,""],connected_components:[1,2,1,""],context:[1,2,1,""],cpu:[1,2,1,""],cuda:[1,2,1,""],data_by_meta:[1,2,1,""],data_dict:[1,2,1,""],device:[1,2,1,""],edge:[1,2,1,""],edge_list:[1,2,1,""],edge_mask:[1,2,1,""],edge_weight:[1,2,1,""],from_dense:[1,2,1,""],from_molecule:[1,2,1,""],from_smiles:[1,2,1,""],full:[1,2,1,""],get_edge:[1,2,1,""],get_item:[1,2,1,""],graph:[1,2,1,""],graph_mask:[1,2,1,""],index:[1,2,1,""],ion_to_molecule:[1,2,1,""],merge:[1,2,1,""],node:[1,2,1,""],node_mask:[1,2,1,""],num_atom:[1,2,1,""],num_bond:[1,2,1,""],pack:[1,2,1,""],packed_type:[1,3,1,""],repeat:[1,2,1,""],split:[1,2,1,""],subbatch:[1,2,1,""],subgraph:[1,2,1,""],to_molecule:[1,2,1,""],to_scaffold:[1,2,1,""],to_smiles:[1,2,1,""],unpack:[1,2,1,""],unpack_data:[1,2,1,""],unpacked_type:[1,3,1,""],visualize:[1,2,1,""]},"drugdiscovery.data.ReactionDataset":{edge_feature_dim:[1,2,1,""],load_csv:[1,2,1,""],load_smiles:[1,2,1,""],node_feature_dim:[1,2,1,""],num_atom_type:[1,2,1,""],num_bond_type:[1,2,1,""],tasks:[1,2,1,""]},"drugdiscovery.data.feature":{ECFP:[1,4,1,""],atom_default:[1,4,1,""],atom_position:[1,4,1,""],bond_default:[1,4,1,""],explicit_property_prediction_node_feature:[1,4,1,""],molecule_default:[1,4,1,""],property_prediction_edge_feature:[1,4,1,""],property_prediction_node_feature:[1,4,1,""],reaction_center_identification_node_feature:[1,4,1,""]},"drugdiscovery.datasets":{BACE:[2,1,1,""],BBBP:[2,1,1,""],CEP:[2,1,1,""],ChEMBLFiltered:[2,1,1,""],ClinTox:[2,1,1,""],Delaney:[2,1,1,""],FB15k237:[2,1,1,""],FB15k:[2,1,1,""],FreeSolv:[2,1,1,""],HIV:[2,1,1,""],Lipophilicity:[2,1,1,""],MUV:[2,1,1,""],Malaria:[2,1,1,""],OPV:[2,1,1,""],QM8:[2,1,1,""],QM9:[2,1,1,""],SIDER:[2,1,1,""],Tox21:[2,1,1,""],ToxCast:[2,1,1,""],USPTO50k:[2,1,1,""],WN18:[2,1,1,""],WN18RR:[2,1,1,""],ZINC250k:[2,1,1,""],ZINC2m:[2,1,1,""]},"drugdiscovery.datasets.BACE":{config_dict:[2,2,1,""],edge_feature_dim:[2,2,1,""],load_config_dict:[2,2,1,""],node_feature_dim:[2,2,1,""],num_atom_type:[2,2,1,""],num_bond_type:[2,2,1,""],tasks:[2,2,1,""]},"drugdiscovery.datasets.BBBP":{config_dict:[2,2,1,""],edge_feature_dim:[2,2,1,""],load_config_dict:[2,2,1,""],node_feature_dim:[2,2,1,""],num_atom_type:[2,2,1,""],num_bond_type:[2,2,1,""],tasks:[2,2,1,""]},"drugdiscovery.datasets.CEP":{config_dict:[2,2,1,""],edge_feature_dim:[2,2,1,""],load_config_dict:[2,2,1,""],node_feature_dim:[2,2,1,""],num_atom_type:[2,2,1,""],num_bond_type:[2,2,1,""],tasks:[2,2,1,""]},"drugdiscovery.datasets.ChEMBLFiltered":{config_dict:[2,2,1,""],edge_feature_dim:[2,2,1,""],load_config_dict:[2,2,1,""],node_feature_dim:[2,2,1,""],num_atom_type:[2,2,1,""],num_bond_type:[2,2,1,""],tasks:[2,2,1,""]},"drugdiscovery.datasets.ClinTox":{config_dict:[2,2,1,""],edge_feature_dim:[2,2,1,""],load_config_dict:[2,2,1,""],node_feature_dim:[2,2,1,""],num_atom_type:[2,2,1,""],num_bond_type:[2,2,1,""],tasks:[2,2,1,""]},"drugdiscovery.datasets.Delaney":{config_dict:[2,2,1,""],edge_feature_dim:[2,2,1,""],load_config_dict:[2,2,1,""],node_feature_dim:[2,2,1,""],num_atom_type:[2,2,1,""],num_bond_type:[2,2,1,""],tasks:[2,2,1,""]},"drugdiscovery.datasets.FB15k":{config_dict:[2,2,1,""],load_config_dict:[2,2,1,""],load_tsv:[2,2,1,""],load_tsvs:[2,2,1,""]},"drugdiscovery.datasets.FB15k237":{config_dict:[2,2,1,""],load_config_dict:[2,2,1,""],load_tsv:[2,2,1,""],load_tsvs:[2,2,1,""]},"drugdiscovery.datasets.FreeSolv":{config_dict:[2,2,1,""],edge_feature_dim:[2,2,1,""],load_config_dict:[2,2,1,""],node_feature_dim:[2,2,1,""],num_atom_type:[2,2,1,""],num_bond_type:[2,2,1,""],tasks:[2,2,1,""]},"drugdiscovery.datasets.HIV":{config_dict:[2,2,1,""],edge_feature_dim:[2,2,1,""],load_config_dict:[2,2,1,""],node_feature_dim:[2,2,1,""],num_atom_type:[2,2,1,""],num_bond_type:[2,2,1,""],tasks:[2,2,1,""]},"drugdiscovery.datasets.Lipophilicity":{config_dict:[2,2,1,""],edge_feature_dim:[2,2,1,""],load_config_dict:[2,2,1,""],node_feature_dim:[2,2,1,""],num_atom_type:[2,2,1,""],num_bond_type:[2,2,1,""],tasks:[2,2,1,""]},"drugdiscovery.datasets.MUV":{config_dict:[2,2,1,""],edge_feature_dim:[2,2,1,""],load_config_dict:[2,2,1,""],node_feature_dim:[2,2,1,""],num_atom_type:[2,2,1,""],num_bond_type:[2,2,1,""],tasks:[2,2,1,""]},"drugdiscovery.datasets.Malaria":{config_dict:[2,2,1,""],edge_feature_dim:[2,2,1,""],load_config_dict:[2,2,1,""],node_feature_dim:[2,2,1,""],num_atom_type:[2,2,1,""],num_bond_type:[2,2,1,""],tasks:[2,2,1,""]},"drugdiscovery.datasets.OPV":{config_dict:[2,2,1,""],edge_feature_dim:[2,2,1,""],load_config_dict:[2,2,1,""],node_feature_dim:[2,2,1,""],num_atom_type:[2,2,1,""],num_bond_type:[2,2,1,""],tasks:[2,2,1,""]},"drugdiscovery.datasets.QM8":{config_dict:[2,2,1,""],edge_feature_dim:[2,2,1,""],load_config_dict:[2,2,1,""],node_feature_dim:[2,2,1,""],num_atom_type:[2,2,1,""],num_bond_type:[2,2,1,""],tasks:[2,2,1,""]},"drugdiscovery.datasets.QM9":{config_dict:[2,2,1,""],edge_feature_dim:[2,2,1,""],load_config_dict:[2,2,1,""],node_feature_dim:[2,2,1,""],num_atom_type:[2,2,1,""],num_bond_type:[2,2,1,""],tasks:[2,2,1,""]},"drugdiscovery.datasets.SIDER":{config_dict:[2,2,1,""],edge_feature_dim:[2,2,1,""],load_config_dict:[2,2,1,""],node_feature_dim:[2,2,1,""],num_atom_type:[2,2,1,""],num_bond_type:[2,2,1,""],tasks:[2,2,1,""]},"drugdiscovery.datasets.Tox21":{config_dict:[2,2,1,""],edge_feature_dim:[2,2,1,""],load_config_dict:[2,2,1,""],node_feature_dim:[2,2,1,""],num_atom_type:[2,2,1,""],num_bond_type:[2,2,1,""],tasks:[2,2,1,""]},"drugdiscovery.datasets.ToxCast":{config_dict:[2,2,1,""],edge_feature_dim:[2,2,1,""],load_config_dict:[2,2,1,""],node_feature_dim:[2,2,1,""],num_atom_type:[2,2,1,""],num_bond_type:[2,2,1,""],tasks:[2,2,1,""]},"drugdiscovery.datasets.USPTO50k":{config_dict:[2,2,1,""],edge_feature_dim:[2,2,1,""],load_config_dict:[2,2,1,""],node_feature_dim:[2,2,1,""],num_atom_type:[2,2,1,""],num_bond_type:[2,2,1,""],tasks:[2,2,1,""]},"drugdiscovery.datasets.WN18":{config_dict:[2,2,1,""],load_config_dict:[2,2,1,""],load_tsv:[2,2,1,""],load_tsvs:[2,2,1,""]},"drugdiscovery.datasets.WN18RR":{config_dict:[2,2,1,""],load_config_dict:[2,2,1,""],load_tsv:[2,2,1,""],load_tsvs:[2,2,1,""]},"drugdiscovery.datasets.ZINC250k":{config_dict:[2,2,1,""],edge_feature_dim:[2,2,1,""],load_config_dict:[2,2,1,""],node_feature_dim:[2,2,1,""],num_atom_type:[2,2,1,""],num_bond_type:[2,2,1,""],tasks:[2,2,1,""]},"drugdiscovery.datasets.ZINC2m":{config_dict:[2,2,1,""],edge_feature_dim:[2,2,1,""],load_config_dict:[2,2,1,""],node_feature_dim:[2,2,1,""],num_atom_type:[2,2,1,""],num_bond_type:[2,2,1,""],tasks:[2,2,1,""]},"drugdiscovery.layers":{common:[4,0,0,"-"],conv:[4,0,0,"-"],distribution:[4,0,0,"-"],functional:[4,0,0,"-"]},"drugdiscovery.layers.common":{GaussianSmearing:[4,1,1,""],MultiLayerPerceptron:[4,1,1,""],MutualInformation:[4,1,1,""],PairNorm:[4,1,1,""],Sequential:[4,1,1,""]},"drugdiscovery.layers.common.GaussianSmearing":{forward:[4,2,1,""]},"drugdiscovery.layers.common.PairNorm":{forward:[4,2,1,""]},"drugdiscovery.layers.common.Sequential":{forward:[4,2,1,""]},"drugdiscovery.layers.conv":{ChebyshevConv:[4,1,1,""],ContinuousFilterConv:[4,1,1,""],GraphAttentionConv:[4,1,1,""],GraphConv:[4,1,1,""],GraphIsomorphismConv:[4,1,1,""],GraphIsomorphismConvPretraining:[4,1,1,""],MessagePassing:[4,1,1,""],MessagePassingBase:[4,1,1,""],NeuralFingerprintConv:[4,1,1,""],RelationalGraphConv:[4,1,1,""]},"drugdiscovery.layers.conv.ChebyshevConv":{forward:[4,2,1,""]},"drugdiscovery.layers.conv.GraphIsomorphismConvPretraining":{forward:[4,2,1,""]},"drugdiscovery.layers.conv.MessagePassingBase":{forward:[4,2,1,""]},"drugdiscovery.layers.distribution":{IndependentGaussian:[4,1,1,""]},"drugdiscovery.layers.distribution.IndependentGaussian":{forward:[4,2,1,""]},"drugdiscovery.layers.functional":{as_mask:[4,4,1,""],masked_mean:[4,4,1,""],mean_with_nan:[4,4,1,""],multi_slice_mask:[4,4,1,""],multinomial:[4,4,1,""],one_hot:[4,4,1,""],shifted_softplus:[4,4,1,""],variadic_cross_entropy:[4,4,1,""],variadic_log_softmax:[4,4,1,""],variadic_max:[4,4,1,""],variadic_mean:[4,4,1,""],variadic_sum:[4,4,1,""],variadic_topk:[4,4,1,""]},"drugdiscovery.metrics":{AUPRC:[5,4,1,""],AUROC:[5,4,1,""],QED:[5,4,1,""],SA:[5,4,1,""],area_under_prc:[5,4,1,""],area_under_roc:[5,4,1,""],chemical_validity:[5,4,1,""],logP:[5,4,1,""],penalized_logP:[5,4,1,""],r2:[5,4,1,""],variadic_accuracy:[5,4,1,""]},"drugdiscovery.models":{ChebyshevConvolutionalNetwork:[6,1,1,""],ComplEx:[6,1,1,""],DistMult:[6,1,1,""],GCN:[6,3,1,""],GIN:[6,3,1,""],GraphConvolutionalNetwork:[6,1,1,""],GraphIsomorphismNetwork:[6,1,1,""],InfoGraph:[6,1,1,""],MPNN:[6,3,1,""],MessagePassingNeuralNetwork:[6,1,1,""],NFP:[6,3,1,""],NeuralFingerprint:[6,1,1,""],RGCN:[6,3,1,""],RelationalGraphConvolutionalNetwork:[6,1,1,""],RotatE:[6,1,1,""],SchNet:[6,1,1,""],SimplE:[6,1,1,""],TransE:[6,1,1,""]},"drugdiscovery.models.ChebyshevConvolutionalNetwork":{config_dict:[6,2,1,""],load_config_dict:[6,2,1,""]},"drugdiscovery.models.ComplEx":{config_dict:[6,2,1,""],load_config_dict:[6,2,1,""]},"drugdiscovery.models.DistMult":{config_dict:[6,2,1,""],load_config_dict:[6,2,1,""]},"drugdiscovery.models.GraphConvolutionalNetwork":{config_dict:[6,2,1,""],load_config_dict:[6,2,1,""]},"drugdiscovery.models.GraphIsomorphismNetwork":{config_dict:[6,2,1,""],forward:[6,2,1,""],load_config_dict:[6,2,1,""]},"drugdiscovery.models.InfoGraph":{config_dict:[6,2,1,""],load_config_dict:[6,2,1,""]},"drugdiscovery.models.MessagePassingNeuralNetwork":{config_dict:[6,2,1,""],load_config_dict:[6,2,1,""]},"drugdiscovery.models.NeuralFingerprint":{config_dict:[6,2,1,""],load_config_dict:[6,2,1,""]},"drugdiscovery.models.RelationalGraphConvolutionalNetwork":{config_dict:[6,2,1,""],load_config_dict:[6,2,1,""]},"drugdiscovery.models.RotatE":{config_dict:[6,2,1,""],load_config_dict:[6,2,1,""]},"drugdiscovery.models.SchNet":{config_dict:[6,2,1,""],load_config_dict:[6,2,1,""]},"drugdiscovery.models.SimplE":{config_dict:[6,2,1,""],load_config_dict:[6,2,1,""]},"drugdiscovery.models.TransE":{config_dict:[6,2,1,""],load_config_dict:[6,2,1,""]},"drugdiscovery.tasks":{AttributeMasking:[7,1,1,""],AutoregressiveGeneration:[7,1,1,""],CenterIdentification:[7,1,1,""],ContextPrediction:[7,1,1,""],DeepGraphInfomax:[7,1,1,""],Discriminator:[7,1,1,""],EdgePrediction:[7,1,1,""],GCPNGeneration:[7,1,1,""],PropertyPrediction:[7,1,1,""],SynthonCompletion:[7,1,1,""],Unsupervised:[7,1,1,""]},"drugdiscovery.tasks.AttributeMasking":{config_dict:[7,2,1,""],forward:[7,2,1,""],load_config_dict:[7,2,1,""]},"drugdiscovery.tasks.AutoregressiveGeneration":{config_dict:[7,2,1,""],load_config_dict:[7,2,1,""],preprocess:[7,2,1,""]},"drugdiscovery.tasks.CenterIdentification":{config_dict:[7,2,1,""],load_config_dict:[7,2,1,""],predict_synthon:[7,2,1,""]},"drugdiscovery.tasks.ContextPrediction":{config_dict:[7,2,1,""],forward:[7,2,1,""],load_config_dict:[7,2,1,""]},"drugdiscovery.tasks.DeepGraphInfomax":{config_dict:[7,2,1,""],forward:[7,2,1,""],load_config_dict:[7,2,1,""]},"drugdiscovery.tasks.Discriminator":{forward:[7,2,1,""]},"drugdiscovery.tasks.EdgePrediction":{config_dict:[7,2,1,""],forward:[7,2,1,""],load_config_dict:[7,2,1,""]},"drugdiscovery.tasks.GCPNGeneration":{config_dict:[7,2,1,""],load_config_dict:[7,2,1,""],preprocess:[7,2,1,""]},"drugdiscovery.tasks.PropertyPrediction":{config_dict:[7,2,1,""],load_config_dict:[7,2,1,""],preprocess:[7,2,1,""]},"drugdiscovery.tasks.SynthonCompletion":{config_dict:[7,2,1,""],load_config_dict:[7,2,1,""]},drugdiscovery:{core:[0,0,0,"-"],data:[1,0,0,"-"],datasets:[2,0,0,"-"],metrics:[5,0,0,"-"],models:[6,0,0,"-"],tasks:[7,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","attribute","Python attribute"],"4":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:attribute","4":"py:function"},terms:{"120mb":19,"456k":10,"4tb":19,"50k":29,"abstract":21,"break":29,"case":[2,19,21,22],"class":[0,1,2,4,6,7,9,21],"default":[0,1,2,4,6,19],"final":21,"float":[0,4,6,7,22],"function":[0,1,2,3,6,7,19,21,22],"import":[0,19,21,22,26,27,28,29],"int":[0,1,2,4,6,7,27],"new":[1,21],"return":[0,1,2,4,6,7,19,21,22,29],"short":6,"true":[0,1,4,6,27,29],"var":21,"while":[4,6,7,19,22,26,29],And:26,Axes:1,BFS:7,For:[0,1,2,7,10,11,19,21,22,26,28,29],IDs:21,One:19,The:[0,1,7,10,11,19,21,22,26,27,28,29],Then:[28,29],There:[4,19,29],Use:[0,1,22],__init__:0,__main__:26,__name__:26,_in_j:21,_kernel:4,_lrschedul:0,_meta_typ:0,_metacontain:0,a_1:[1,19],a_i:[1,19],a_n:[1,19],abil:2,about:[0,19],abov:[19,21,26],absolut:1,acc:26,acceler:19,accept:[19,22],acces:5,access:[0,5],accord:[0,1],accuraci:[5,22,29],activ:[4,6],actual:26,adam:[26,27,28,29],add:[2,7,19,27,29],addit:7,addition:4,adjac:[1,19],adjust:1,adr:2,advantag:19,advers:2,adversarial_temperatur:28,affect:[1,2],afterward:[4,6,7,28],against:2,agent:7,agent_update_interv:7,aggreg:[7,21],aim:[27,28],algorithm:21,alia:[1,6],all:[0,1,4,5,6,7,19,21,22,26,29],all_loss:6,all_prefix_slic:22,allow_unus:4,along:22,alreadi:[0,1],also:[0,1,4,7,19,21,22,26,29],altern:19,although:[4,6,7],alwai:[1,2,19],among:19,analysi:2,ani:[0,1,4,7,19,21,29],append:[22,27,29],appli:[0,1,2,4,6,19,22],approach:15,approv:[2,27],arang:22,arbitari:19,area:5,area_under_prc:5,area_under_roc:5,arg:[1,4],argument:[0,1,4],aromat:[1,2],array_lik:1,array_likeb:1,as_mask:4,as_synthon:[2,29],aspect:26,assert:[0,1,4],assign:[0,1,19],atom:[0,1,2,7,22,26,29],atom_attribute_model:[7,26],atom_color:29,atom_default:1,atom_map:[1,29],atom_posit:1,atom_typ:[1,7,22],atoms_and_bond:29,attent:4,attribut:[1,2,7,10,20,22,25,29],attributemask:[7,26],audio:22,auprc:[5,7,27],auroc:[5,7,27],auto:[0,1],automat:[0,1,19],autoregress:[7,22],autoregressivegener:7,auxiliari:22,avail:[0,1,4,6,7],averag:26,avg:10,avoid:29,axes:1,axi:[1,22],bace:[2,10],barrier:2,base:[0,1,2,4,6,7,11,19,22,27,28,29],baselin:[7,10],baseline_momentum:7,basic:[1,28],batch:[0,1,4,6,7,15,20,21,29],batch_norm:[4,6,27],batch_sampl:1,batch_siz:[0,1,21,26,27,28,29],bbbp:[2,10],bce:[7,27],beam:29,becaus:26,befor:29,begin:[1,19],behind:19,belong:[1,26],below:26,benchmark:[10,11,12,13,15],benzen:19,beta:2,better:[28,29],between:[4,5,6,7,19,29],bia:28,big:22,binari:[2,4,5,19],bind:2,bioassai:2,biolog:2,bipartit:21,block:[1,15],blood:2,blue:29,bmatrix:[1,19],bond:[1,2,7,19,29],bond_color:29,bond_default:1,bond_stereo:1,bond_typ:[1,2],bool:[0,1,2,4,6],booltensor:4,both:[6,11,21,29],bound:19,brain:2,brc1:22,broadcast:20,broken:29,budget:29,build:[0,15,28],built:15,bunch:[0,19],calcul:2,call:[0,4,6,7,26,29],callabl:[1,2],can:[0,1,4,7,19,21,22,26,27,28,29],candid:[2,29],cannot:21,canon:[0,1],care:[4,6,7],cat:22,categori:[4,5,27],caus:2,caution:0,ccnc:22,cdot:[1,19],center:[1,4,7,25],center_topk:29,centeridentif:[7,29],cep:2,characterist:5,charg:1,chebyshev:[4,6],chebyshevconv:4,chebyshevconvolutionalnetwork:6,checkpoint:[0,29],chembl:10,chemblfilt:2,chemic:[1,2,5,27],chemical_valid:5,chemistri:[4,6],chiral:1,chiral_tag:1,clamp:22,classif:[2,4,5,6,22],classmethod:[0,1,2,6,7],clean:2,clinic:[2,27],clintox:[2,10,26,27],close:29,code:[0,19,27,28,29],coeffici:[2,5],collat:1,collate_fn:1,collect:[21,29],color:22,column:1,combin:[21,29],common:[3,19],commonli:19,compact:[1,19],compar:4,comparison:19,compat:7,complet:[7,25],complex:[6,12],compon:[1,19],compound:[2,5],comprehens:15,comput:[1,4,5,6,7,19,21,22],concat:[4,6],concat_hidden:[6,27,29],concaten:22,concentr:2,config:[0,2,6,7],config_dict:[0,2,6,7],configur:[0,2,6,7],conflict:29,connect:[1,19],connected_compon:[1,29],consid:[1,10,11,13,28],consist:[19,22,27],construct:[0,1,2,6,7,19,22,26,28],constructor:4,contain:[0,1,4,10,11,12,13,27,29],context:[0,1,7,10,19,26],contextpredict:7,continu:[4,6],continuousfilterconv:4,contrast:7,conv:3,conveni:0,convent:[19,21],convert:[1,2,4,19,22],convolut:[4,6,29],copi:[0,1,22],core:[3,15,19,26,27,28,29],correct:[1,29],correspond:[4,7,19,21,22,29],cost:22,count:1,cover:15,cpu:[0,1,19],creat:[0,1,20,22],criterion:[7,27],cross:4,crossentropyloss:26,csv:[1,2],csv_file:[1,2],ct_tox:27,cuda:[1,19,27,29],cum_siz:22,cumsum:[22,29],current:0,curv:5,custom:[0,4,15,20,21],cut:6,cutoff:[4,6],cycl:5,data:[0,2,3,4,5,6,10,11,15,20,22,26,27,29],data_by_meta:[0,1],data_dict:[0,1],databas:2,dataload:1,dataset:[0,1,3,10,11,13,15,25,26],ddot:[1,19],debug:[15,20],decompos:2,deep:[4,7,10,19,26],deepgraphinfomax:7,def:[0,21,22,29],defin:[0,4,6,7,19,22,25,29],definit:0,degre:[19,21],degree_in:[19,21],degree_out:19,delanei:2,demonstr:[22,29],denot:[19,21],dens:[1,19,22],deriv:[0,4,7],derivedclass:0,describ:21,design:0,desir:22,detail:1,develop:22,deviat:11,devic:[1,19,22],dft:2,dgi:[10,26],diagon:1,dict:[0,1,2,4,6,7],diff:21,differ:[1,2,7,21,22,26,29],dim:[4,6,21,29],dim_siz:21,dimens:[1,2,4,6,19,28],directli:[0,19,22],disconnect:1,discount:7,discoveri:[26,29],discrimin:7,distinguish:19,distmult:[6,12],distribut:[0,2,3],divers:29,divid:21,document:15,doe:19,doesn:[0,4],doing:10,don:4,done:29,doubl:[1,2],download:[27,29],downstream:10,draw:1,drop:[1,2,6],dropout:4,dropout_ratio:[4,6],drug:[2,5,26,29],drugdiscoveri:[3,19,21,22,26,27,28,29],due:[1,11,26],dure:[1,19],dynam:1,each:[0,1,2,4,5,6,7,10,11,21,22,27,28,29],easili:[19,21],ec50:2,ecfp:[1,19],edg:[1,2,4,6,7,10,19,21,22,26],edge2graph:[1,21],edge_attr:4,edge_featur:[1,2,19,26],edge_feature_dim:[1,2],edge_import:19,edge_input_dim:[4,6],edge_list:[1,2,19,21,22,29],edge_map:29,edge_mask:[1,19,22],edge_model:7,edge_weight:[1,19],edgepredict:7,effcient:21,effect:2,effici:[2,22,28],either:19,elabor:21,electron:[1,2],element:[4,22],elif:29,els:29,emb_dim:[4,6,26],embed:[6,28],embedding_dim:[6,28],emploi:19,enabl:[0,19],enable_auto_context:0,encod:[6,21],encourag:7,end2end:29,end:[1,4,19,22],energet:2,energi:2,engin:[0,26,27,28,29],enn:6,enough:22,ensur:29,entiti:[2,6,28],entri:1,entropi:4,enumer:29,epoch:[0,1],eps:[4,6],epsilon:[4,6],equival:[1,19,21,22],essenti:19,estim:[2,4,5,6],evalu:[0,5,10,11,27,28,29],everi:[0,1,4,6,7,21],everyth:[0,27,28],exampl:[0,1,4,19,21,22,26,28,29],except:1,excess:22,excit:2,exclud:[0,1],exist:[22,28],expand:[0,4],expect:1,expens:26,experiment:2,explicit:[0,1],explicit_h:1,explicit_property_prediction_node_featur:1,explicitli:[0,1,2,4],explor:26,extend:[1,22],extens:[15,20],extract:[1,2,19],eye:1,fail:2,fals:[0,1,2,4,6,26,29],fast:[4,6],faster:22,fb15k237:[2,28],fb15k:[2,9,28],fda:[2,27],fda_approv:27,featur:[0,2,3,4,6,7,19,22,27,29],few:27,field:4,figur:[1,21],figure_s:[1,27],file:[0,1,2],fill:22,filter:[2,4,6],fingerprint:[1,4,6],first:[11,19,21,22,29],flatten:[22,29],flexibl:15,flow:7,follow:[0,1,4,19,21,22,26,27,28,29],footprint:19,form:[1,21,22],formal:1,formal_charg:1,former:[4,6,7],forward:[4,6,7,21],frac:21,framework:[19,22,29],free:[2,19],freebas:[2,28],freesolv:2,from:[0,1,2,4,6,7,10,19,21,22,26,27,28,29],from_dens:[1,19],from_molecul:[1,29],from_smil:[0,1,19,22],full:1,fulli:1,fundament:29,further:28,g2g:[13,29],g2gs_reaction_model:29,g2gs_synthon_model:29,gamma:7,gaussian:4,gaussiansmear:4,gcn:[0,6,22],gcpn:8,gcpngener:7,gener:[0,1,7,9,15,21,22,25,29],geometr:2,get:[0,1,19,22],get_edg:1,get_item:1,gin:[6,26,27],gin_model:26,gin_vers:[6,26],give:29,given:[0,1,9,19,28,29],global:4,global_arg:4,goal:29,gpu:[0,19,22,26,27,28,29],graph1:22,graph2:22,graph2graph:1,graph:[1,2,4,6,7,9,10,15,20,22,25,26,27,29],graph_col:[1,27,29],graph_featur:[1,2,19],graph_id:19,graph_mask:1,graphaf:[7,8],graphattentionconv:4,graphautoregressiveflow:7,graphconv:4,graphconvolutionalnetwork:6,graphisomorphismconv:4,graphisomorphismconvpretrain:4,graphisomorphismnetwork:6,grid:22,ground:[22,29],group:2,gru:6,h_i:21,h_j:21,half:2,hand:29,handl:0,hard:[0,22],has:[4,28],havard:2,have:[1,2,10,19,22,27],head:[4,7],heaviest:22,height:1,here:[10,11,19,21,22,27,28,29],hidden:[4,6,21,27],hidden_dim:[4,6,7,22,27,29],hidden_dim_mlp:7,hierach:0,hierarch:0,high:[2,26],higher:7,highlight:29,hit:12,hiv:[2,10],hook:[0,4,6,7],hop:7,hot:4,how:[1,4,6,22,27,28,29],human:2,hydrat:2,hydrogen:[1,2],hyperparamet:0,idea:28,identif:[1,7,25],identifi:29,ids:[0,1,19],ignor:[1,4,6,7,29],ignore_error:1,illeg:1,illustr:[26,27,28],imag:22,implement:[1,4,6,7,19,21,22],improv:4,includ:[0,1,2,4,19,26],independ:[4,27],independentgaussian:4,index:[1,4,5,19,21],indic:22,individu:29,induct:7,infer:[0,1,6,22,28],infograph:[6,10,25],infomax:[7,10,26],inform:[1,4,6,10,19,26],inherit:0,inhibit:2,inhibitor:2,initi:[4,6,10],input:[4,5,6,19,20,21],input_dim:[4,6,22,27,29],inspir:0,instal:15,instanc:[0,1,2,4,6,7,19,27,28],instanti:7,instead:[0,4,6,7,22],integ:19,interact:[4,6],interfac:15,intern:19,intersect:29,intuit:[19,22,27],invalid:22,investig:27,invok:0,ion:1,ion_to_molecul:[1,29],irregular:[15,20],is_reaction_atom:29,is_reaction_bond:29,ismorph:6,isol:[1,19,21],isomer:1,isomorph:[4,27],item:[22,27,29],iter:21,its:[19,26,27],itself:26,join:27,jointli:27,just:[19,29],keep:[1,19],keepdim:4,kei:[0,7],kekul:[1,2,29],kernel:[4,6],keyword:1,kind:[19,21,28],knowledg:[2,6,9,15,19,25],knowledgegraphdataset:1,knowledgegraphembed:28,kwarg:[0,1,4],l3_regular:6,label:[2,27],larg:[7,10,19],larger:7,largest:[1,4],last:4,latest:15,latter:[4,6,7],launch:0,layer1:4,layer2:4,layer3:4,layer:[3,6,7,15,20,22,27],layout:1,leaki:4,learn:[4,6,7,10,19,22,27,28,29],learn_ep:[4,6],learnabl:4,len:[22,26,27,29],length:[1,4,5,19,22,26,27,29],less:4,let:[19,21,22,27,28,29],level:[1,2,6,7,19,22],like:[0,5,19,29],likelihood:[4,7,29],limit:11,line:[0,19],linear:26,link:[6,28],lipophil:2,list:[0,1,2,4,6,7,19,26],load:[0,1,2,28,29],load_config_dict:[0,2,6,7],load_csv:1,load_optim:[0,29],load_smil:1,load_tsv:[1,2],loader:1,local:[4,6],log:[0,2,4,29],log_interv:0,log_likelihood:7,logarithm:5,logd:2,logic:22,logp:[5,8],longtensor:4,look:29,loop:22,loss:[4,6,7,22,26],loss_weight:6,lot:11,lower:7,lr_schedul:0,mae:7,mai:[0,1,19,21,27,28,29],main:10,mainstream:26,maintain:0,make:[0,22],malaria:2,manag:[0,1,19],mani:[1,22],manner:[10,19],manual:0,manual_se:29,map:[0,1,7,19,21],market:2,mask:[1,4,7,10,20,22,25],mask_rat:7,masked_mean:4,match:1,math:5,mathemat:22,matplotlib:1,matric:19,matrix:[1,19],max:[4,7,22],max_edge_unrol:7,max_nod:7,max_predict:29,max_scor:[6,28],max_siz:22,maxim:[2,4,6,7],mean:[4,6,7,10,11,19,21,26],mean_with_nan:4,measur:2,mechan:[2,19],member:[0,1],memori:[1,19,22],merg:1,messag:[1,4,6,20],messagepass:4,messagepassingbas:[4,21],messagepassingneuralnetwork:6,meta:[0,1],meta_dict:0,meta_typ:0,meter:0,method:[10,12,21,26,28],metric:[0,3,6,7,15,22,27],mid:21,might:21,million:19,min:22,mini:1,minim:4,minut:27,miss:28,mlp:[4,6,7],mode:[4,29],model:[0,2,3,4,7,10,11,13,15,20,22,25,26,29],model_context:7,model_context_readout:7,modern:[19,21],modul:[0,4,6,7,21,27],mol:[1,19,29],molecuel:10,molecul:[0,1,2,5,7,9,10,15,19,22,25,26,27,29],molecular:[4,6,7,9,15,25],molecule_default:1,moleculedataset:1,momentum:7,more:[1,22,29],most:29,mpnn:6,mrr:12,mse:7,much:22,multi:[4,6,27],multi_slice_mask:[4,22],multilayerperceptron:4,multinomi:4,multipl:[0,1,2,4],mutual:[4,6,26],mutualinform:4,muv:[2,10],my_featur:0,my_node_attr:1,myclass:0,name:[0,1,2,21],nan:4,natur:22,ncc:22,nearest:2,need:[0,4,6,7,19,21,22,28],neg:[4,7,26,28],negative_slop:4,neighbor:[2,26],neighborhood:7,nest:1,network:[4,6,7,15,19,20,27,29],networkx:1,neural:[4,6,7,15,19,20,27],neuralfingerprint:6,neuralfingerprintconv:4,neuralfp:6,nfp:6,nll:7,node2graph:[1,21],node:[0,1,2,4,6,7,19,21,22,26,29],node_featur:[0,1,2,19,22,26,29],node_feature_dim:[1,2,27,29],node_id:19,node_in:[1,19,21,29],node_mask:[1,19],node_model:7,node_out:[1,19,21,29],node_posit:2,node_valu:0,non:[1,4,19,29],none:[0,1,2,4,6,7,22,26],nonzero:29,normal:[4,6,19],note:[0,1,2,4,15,19,22,29],notic:21,now:[27,28,29],nproc_per_nod:0,ntarget:27,nuclear:2,num:4,num_atom:1,num_atom_typ:[1,2],num_beam:29,num_bond:1,num_bond_typ:[1,2,29],num_col:[1,29],num_cum_nod:19,num_cum_x:22,num_edg:[1,19,22],num_edge_sampl:7,num_ent:[6,28],num_epoch:[0,26,27,28,29],num_gaussian:[4,6],num_gru_lay:6,num_head:4,num_kernel:4,num_lay:[6,26],num_length:22,num_mlp_lay:[4,6,7],num_neg:[7,28],num_nod:[1,19,21,22],num_node_sampl:7,num_predict:29,num_rel:[1,4,6,19,28,29],num_row:[1,19,27],num_s2s_step:6,num_sampl:4,num_synthon:7,num_work:1,number:[0,1,2,4,5,6,7,22,28],number_of_gpu:0,object:[0,1],obtain:29,octanol:[2,5],offset:1,onc:[0,19,27,28],one:[4,6,7,21,27,28,29],one_hot:4,onli:[0,1,2,6,11,19,29],oper:[4,5,19,21,22],optim:[0,7,26,27,28,29],option:[0,1,2,4,6,7],opv:2,order:[0,1,4,7,19,29],ordered_scaffold_split:1,organ:2,origin:[4,6,7,21],other:[1,19,21,26,29],otherwis:1,our:[19,22,25,29],out:[6,21,29],output:[0,1,2,4,6,7,20,21,26],output_dim:[4,6],over:[0,1,4,5,22,29],overlap:1,overlap_atom:29,overlap_bond:29,overridden:[4,6,7],overwritten:4,own:19,pack:[1,19,22,27,29],pack_offset:22,packag:[0,15],packed_typ:1,packedgraph:[1,19],packedmolecul:[1,5,22,29],pad:[4,22],page:[10,11,12,13],pagerank:21,pagerankiter:21,pain:19,pair:[1,2,26,29],pairnorm:4,paper:[4,6],parallel:0,paramet:[0,1,2,4,5,6,7,26,27,28,29],parasit:2,part:[7,27],partial:1,partit:5,pass:[0,1,4,6,7,19,20],patent:2,path:2,pathwai:[2,29],pdf:1,penal:[5,8],penalized_logp:5,penetr:2,per:[1,7],perceptron:4,perform:[0,4,6,7,10,11,21,22,29],photovolta:2,pick:[19,21],pipelin:29,plausibl:28,plogp:7,plot:[1,19,27,29],png:[1,29],polynomi:[4,6],pop:27,popular:[11,19,28],posit:[1,2,4,7,26],possibl:[4,22,29],power:[4,6],ppo:7,practic:19,prc:5,pre:[6,7,9,25],precis:5,pred:[5,22,27],pred_atom:29,pred_bond:29,pred_index:22,pred_prob:22,predict:[1,4,5,6,7,9,10,15,22,25,26,28,29],predict_react:29,predict_synthon:[7,29],prefix:[0,22],prepar:[22,25],preprocess:[0,7,29],present:4,pretrain:[9,15,25],primit:21,print:19,problem:26,process:[1,6,19],produc:[19,22,29],product:[2,7,29],progress:0,proj_model:7,project:[2,7],properli:29,properti:[0,1,2,7,9,10,15,19,25,26],property_prediction_edge_featur:1,property_prediction_node_featur:1,propertypredict:[7,27],propos:[6,7],protoyp:15,provid:[1,7,15,19,21,26,28],pth:29,pubchem:2,purpl:29,put:[27,28],python:0,pytorch:[0,4,15,21],qed:[5,7,8],qm8:2,qm9:2,qualit:2,quantit:5,quantum:[2,4,6],queri:1,quick:15,radic:1,radical_electron:1,radiu:[1,4,7],rais:1,rand:1,randint:[1,22],random:[0,7,9,10,29],random_split:[26,27,29],randomli:1,rang:[22,27,29],rapid:15,rate:[4,7],rather:0,ratio:13,rbf:[4,6],rdchem:1,rdkit:1,reactant:[2,29],reaction:[1,2,7,9,29],reaction_cent:[7,29],reaction_center_identification_node_featur:1,reaction_dataset:29,reaction_model:29,reaction_optim:29,reaction_reaction_identif:29,reaction_set:29,reaction_solv:29,reaction_task:29,reaction_test:29,reaction_train:29,reaction_valid:29,reaction_valid_smal:29,reactiondataset:1,readi:28,readout:[6,20,26],reason:[2,9,15,25],recal:[5,29],receiv:5,recept:4,receptor:2,recip:[4,6,7],reciproc:19,recogn:0,record:[0,7],recurs:0,red:29,reduc:[4,19,28],reduct:4,refer:15,refin:2,regist:[0,1,4,6,7],registri:0,regress:[2,5],regular:6,rel:[1,4,5],relat:[1,2,4,6,19,28,29],relationalgraphconv:4,relationalgraphconvolutionalnetwork:6,relu:[4,6],remov:[1,19,22],repeat:[1,4,22],replac:4,replic:2,report:[10,11],repres:[21,22],represent:[4,6,7,9,15,19,21,22,25,27,29],requir:19,reset:29,reshuffl:1,respect:[19,27],respons:2,rest:29,restrict:0,result:[1,2,7,27,29],retain:4,retriev:1,retrosynthesi:[7,9,15,25],revers:21,reward:7,reward_temperatur:7,rgcn:[6,29],right:29,ring:19,rmse:7,roc:5,rotat:[6,12,28],round:1,row:[1,29],run:[4,6,7],s2s:6,same:[1,4,19,22,26,29],sampl:[1,2,4,5,7,22,27,28,29],sampler:1,save:[0,1,19,29],save_fil:[1,29],scaffold:[1,9,10],scaffold_split:1,scale:[2,4,6,19],scale_individu:4,scatter:21,scatter_add:21,scatter_mean:21,scenario:[0,19],schedul:0,schnet:[4,6],score:[5,6],screen:2,search:[0,29],second:21,secretas:2,see:[1,29],seed:29,seen:26,select:27,self:[9,21,25],semi:[1,4,6,7],semisupervis:1,send:21,separ:[0,6],separate_model:[6,26],sequenti:4,serv:21,set2set:6,set:[0,1,2,4,7,10,11,13,26,27,28,29],setup:27,sever:[19,29],shape:[1,4,5,19,22],shift:4,shifted_softplu:[4,6],short_cut:[6,27],should:[1,4,6,7,19,29],show:[1,11,21,22,29],shuffl:1,side:[21,29],sider:[2,10],sigma2:4,sigma:4,sigmoid:27,signal:26,signatur:4,silent:[0,4,6,7],similar:[26,27],similarli:29,simpl:[6,12],simpli:28,sinc:[4,6,7,21],singl:[1,2,19],size:[0,1,4,5,19,22,29],slice:[4,19,22],slope:4,small:[2,29],smaller:[22,28],smallest:[4,22],smear:4,smile:[1,19],smiles_field:1,smiles_list:[1,22],softmax:4,softplu:4,solubl:2,solut:22,solver:[26,27,28,29],some:[19,21,22,27,29],someth:0,sort:1,sourc:[0,1,2,4,5,6,7,21],space:[6,11],spars:[1,19,22],sparsifi:4,special:[6,26],specif:[0,1,21,26,27],specifi:[0,1,19,21,28],spectra:2,spectral:[4,6],spite:22,split:[0,1,9,10,13,27,28,29],spring:1,squar:21,squeez:22,standard:[6,28,29],start:[4,15,22],state:[0,2,21],state_dict:0,statist:2,statu:27,step:[0,4,6,21,22],stereo:1,stereo_atom:1,stereochem:1,stop:[4,29],store:[0,1,2,19],str:[0,1,2,4,6,7],strategi:7,stress:2,string:[0,1,4,19],structur:[1,10,15,20,21,26,27],sub:29,subbatch:1,subclass:[4,6,7],subgraph:[1,7,20],subprocess:1,subset:[2,10,19,29],substructur:7,suggest:0,sum:[4,5,6,22,27],sum_:21,summari:7,supervis:[1,4,6,7,9,25],support:[0,1,4,15,19,21],suppos:[4,5],surpress:0,synchron:0,synthesi:29,synthet:5,synthon:[2,7,25],synthon_complet:29,synthon_dataset:29,synthon_id:29,synthon_model:29,synthon_optim:29,synthon_solv:29,synthon_task:29,synthon_test:29,synthon_train:29,synthon_valid:29,synthoncomplet:[7,29],system:2,tabl:1,tag:1,take:[4,6,7,19,22,27,28,29],target:[1,2,4,5,7,21,22,27,29],target_field:1,task:[0,1,2,3,10,11,15,22,26,27,28,29],temperatur:[7,28],tensor:[0,1,4,5,19,22],test:[0,10,11,13,25],test_set:[0,27,28],text:22,than:[0,1,4,22],thei:[0,1,4,19],them:[4,6,7,22,29],therefor:22,thermodynam:2,thi:[0,1,2,4,6,7,10,11,12,13,19,21,22,27,28,29],third:19,those:[2,26],three:[19,21],through:[0,22,27],throughput:2,time:[1,22],titl:[1,27,29],to_molecul:[1,29],to_scaffold:1,to_smil:1,togeth:[27,28],toi:[22,26],tolist:[1,29],toolbox:15,top1_index:29,top3_index:22,top3_valu:22,top:[4,7,13,15,22,29],torch:[0,1,4,19,21,22,26,27,28,29],torch_data:[26,29],torch_scatt:21,total:29,tox21:[2,10],toxcast:[2,10],toxic:2,toxicolog:2,toxiti:27,track:[0,1],train:[0,6,7,9,11,13,25,29],train_set:[0,7,26,27,28],trake:0,trans:[6,12],transfer:[6,19],transform:[1,2],translat:[6,29],trial:[2,27],trick:19,triplet:[2,6,28],triplet_list:19,trivial:[2,21],true_atom:29,true_bond:29,truth:[22,29],tsv:[1,2],tsv_file:[1,2],tupl:[1,4,27],tutori:[15,27,28],two:[1,4,6,7,10,13,22,27,29],type:[0,1,2,4,7,19,26,29],typic:[0,19,22],u_i:21,under:5,union:[4,29],unknown:9,unlik:22,unnecessari:22,unnorm:4,unpack:[1,19],unpack_data:1,unpacked_typ:1,unsqueez:[21,22,29],unsupervis:[6,7,26],updat:[0,6,7,21],use:[0,1,6,19,21,22,27,28,29],used:[0,1,4,7,19,21,28,29],useful:1,uses:19,using:[10,28,29],uspto50k:[2,29],uspto50k_synthon_valid:29,uspto:2,usual:22,util:[1,26,27,29],valid:[0,5,10,11,13,22,27,28,29],valid_set:[0,27,28],valu:[0,4,7,21,22,27],vanilla:[4,11],variabl:19,variad:[1,4,5,20],variadic_accuraci:[5,22],variadic_cross_entropi:[4,22],variadic_log_softmax:[4,22],variadic_max:[4,22],variadic_mean:[4,22],variadic_sum:[4,22],variadic_topk:[4,22],varianc:[4,21],variant:[4,6],vdot:[1,19],vector:[4,28],verbos:[1,2,7],version:[2,19],via:6,view:[21,22,26],virtual:2,visual:[1,19,22,27,29],vitro:2,want:19,water:[2,5],weight:[1,6,7],well:[15,28,29],when:[0,4,21,22],whenev:22,where:[0,1,13,19,21,22],whether:[2,4],which:[0,1,22,28,29],width:1,wildcard:1,window:1,wise:1,with_hydrogen:[1,2],within:[4,6,7],without:[0,2],wn18:[2,9],wn18rr:[2,9],won:0,word:19,wordnet:2,work:29,wrap:[19,29],wrapper:7,write:[19,22],wrong:29,you:[0,1,28],your:[15,20],your_script:0,zero:[1,19],zinc15:10,zinc250k:[2,8],zinc2m:2,zinc:2,zip:27},titles:["drugdiscovery.core","drugdiscovery.data","drugdiscovery.datasets","Documentation","drugdiscovery.layers","drugdiscovery.metrics","drugdiscovery.models","drugdiscovery.tasks","Graph Generation","Benchmark","Pretrained Molecular Representations","Molecule Property Prediction","Knowledge Graph Reasoning","Retrosynthesis","&lt;no title&gt;","Drugdiscovery - A deep learning platform for drug discovery","Installation","Debug Your Models","Custom Extensions","Graph Data Structures","Notes","Graph Neural Network Layers","Batch Irregular Structures","Quick Start","Molecule Generation","Tutorials","Pretrained Molecular Representations","Property Prediction","Knowledge Graph Reasoning","Retrosynthesis"],titleterms:{"class":13,"function":4,attribut:[19,26],bace:11,batch:[19,22],bbbp:11,benchmark:9,broadcast:21,center:29,cep:11,clintox:11,common:4,complet:29,conv:4,core:0,creat:19,custom:18,data:[1,19],dataset:[2,27,28,29],debug:17,deep:15,defin:[27,28],discoveri:15,distribut:4,document:3,drug:15,drugdiscoveri:[0,1,2,4,5,6,7,15],esol:11,extens:18,fb15k:12,featur:1,freesolv:11,gener:[8,24],given:13,graph:[8,12,19,21,28],hiv:11,identif:29,infograph:26,input:22,instal:16,irregular:22,knowledg:[12,28],layer:[4,21],learn:15,lipophil:11,malaria:11,mask:[19,26],messag:21,metric:5,model:[6,17,27,28],molecul:[11,24],molecular:[10,26],muv:11,network:21,neural:21,note:20,our:[27,28],output:22,pass:21,platform:15,pre:[10,26],predict:[11,27],prepar:[27,28,29],pretrain:[10,26],properti:[11,27],qm8:11,qm9:11,quick:23,random:11,reaction:13,readout:21,reason:[12,28],represent:[10,26],result:10,retrosynthesi:[13,29],scaffold:11,self:[10,26],sider:11,split:11,start:23,structur:[19,22],subgraph:19,supervis:[10,26],synthon:29,task:7,test:[27,28],tox21:11,toxcast:11,train:[10,26,27,28],tutori:25,unknown:13,uspto50k:13,variad:22,wn18:12,wn18rr:12,your:17}})